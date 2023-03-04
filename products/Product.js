                                        // NAV BAR HOVER DROPDOWN EFFECT JS

let boxDropdown = document.querySelectorAll('.boxDropdown');
for (let x = 0; x < document.querySelectorAll('li.categ').length; x++) {
    let list = document.querySelectorAll('li.categ')[x];
    let boxDropdown_list =  document.querySelectorAll('.boxDropdown')[x];
    list.addEventListener('mouseenter',() =>{
        boxDropdown_list.style.display = 'block';
    })
    list.addEventListener('mouseleave',() =>{
        boxDropdown_list.style.display = 'none';
    })
}
for (let x = 0; x < boxDropdown.length; x++) {
    const box = boxDropdown[x];
    box.addEventListener('mouseenter',() =>{
        box.style.display = 'block';
    })
    box.addEventListener('mouseleave',() =>{
        box.style.display = 'none';
    })
}
//PRODUCTS APPENDING IN DIV(results) JS

let f1type=document.getElementById("rimless");                                       
let f2type=document.getElementById("halfrim");                                       
let f3type=document.getElementById("fullrim"); 
let cateye=document.getElementById("cateye"); 
let numberofproducts=document.getElementById("totalproducts");
let selectsort=document.getElementById("sortby");
let products_container=document.getElementById("results");
let typeofpage=JSON.parse(localStorage.getItem("type_page"))||[];
let url="APIS/sunglasses.json";
if(typeofpage[0]=="s"){
    url="APIS/sunglasses.json";
}else if(typeofpage[0]=="k"){
    url="APIS/kidsglass.json";
}else if(typeofpage[0]=="e"){
    url="APIS/eyeglass.json";
}
fetch_data(url);
async function fetch_data(url){
    try{
        let data= await fetch(url);
        let actualdata= await data.json();
        // console.log(actualdata)
        rendercards(actualdata)
        sortingby(actualdata)
        filterbyframetype(actualdata)
        sortbyfshape(actualdata)
        sortbycolor(actualdata)
        search_data_incl(actualdata)
    }catch(error){
            console.log(error)
    }
}

function rendercards(data){
    products_container.innerHTML=null;
    data.forEach((el,index)=> {
        let carddiv=document.createElement("div");

        let imgdiv=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",el.img)
        let ratings=document.createElement("h4");
        let pres=document.createElement("pre");
        pres.append(ratings)
        imgdiv.append(image,pres);
        ratings.innerText=`Rating:${el.rating} ✰    Total Reviews:${el.totalreviews}`
        ratings.setAttribute("class","ratings_imgs")
        let pname=document.createElement("h3")
        pname.innerText=el.name;
        let detailsdiv=document.createElement("div");
        
        let D1div=document.createElement("div");
        let size=document.createElement("p")
        size.innerText="Size: ";
        let sizeN=document.createElement("span")
        sizeN.innerText=el.size;
        size.append(sizeN)
        let price=document.createElement("p")
        let compname=document.createElement("p")
        compname.innerText=el.company;
        let tax=document.createElement("span")
        price.innerText=`₹ ${el.price} `;
        tax.innerText="(+tax)";
        tax.setAttribute("class","tax")
        price.append(tax);
        D1div.append(size,compname,price)
        let D2div=document.createElement("div");
        let c1=document.createElement("div");
        let c2=document.createElement("div");
        let c3=document.createElement("div");
        D2div.append(c1,c2,c3)
        detailsdiv.setAttribute("class","detailsparent")
        detailsdiv.append(D1div,D2div)
        let offerdiv=document.createElement("div");
        let offer=document.createElement("p");
        offer.innerText="40% OFF Use: EYECON";
        offerdiv.append(offer)
        carddiv.append(imgdiv,pname,detailsdiv,offerdiv)
        carddiv.addEventListener("click",()=>{
            let arr=[];
            arr.push(el)
            localStorage.setItem("product",JSON.stringify(arr));
            location.href = "./SingleProductPage.html";
        })
        products_container.append(carddiv)
    });
    numberofproducts.innerText=`${data.length}`
   
}
                                                //sort by functionality

function sortingby(data){
    selectsort.addEventListener("change",(e)=>{
       let c=e.target.value;
       if(c=="lth"){
        data.sort((a,b)=>a.price-b.price)
        rendercards(data)
        }else if(c=="htl"){
           data.sort((a,b)=>b.price-a.price)
           rendercards(data)
        }else if(c=="bstslrs"){
            let newdata=data.filter(item=>item.bestseller=="y");
            rendercards(newdata)
        }else if(c==""){
            rendercards(data)
        }
    })
}                                                
                                        //filter by frametype
function filterbyframetype(data){
    f1type.addEventListener("click",()=>{

        let newdata=data.filter(item=>item.frametype=="rimless");
                rendercards(newdata)
    })
    f2type.addEventListener("click",()=>{
        let newdata=data.filter(item=>item.frametype=="halfrim");
                rendercards(newdata)
    })
    f3type.addEventListener("click",()=>{
        let newdata=data.filter(item=>item.frametype=="fullrim");
                rendercards(newdata)
    })

}                                      
                                    //
                                    // SORT BY FRAMESHAPE
let fshaper=document.getElementById("rectangle");
let fshapec=document.getElementById("cateye");
let fshapew=document.getElementById("wayfarer");
function sortbyfshape(data){

    fshaper.addEventListener("click",()=>{
        let newdata=data.filter(item=>item.fshape=="rectangle");
        rendercards(newdata)
    })
    fshapec.addEventListener("click",()=>{
        let newdata=data.filter(item=>item.frameshape=="cateye");
        rendercards(newdata)
    })
    fshapew.addEventListener("click",()=>{
        let newdata=data.filter(item=>item.frameshape=="wayfarer");
        rendercards(newdata)
    })
}

                                                    //sort by color
let blackcolor=document.getElementById("blk");
let bluecolor=document.getElementById("blu");
function sortbycolor(data){
    blackcolor.addEventListener("click",()=>{
        let newdata=data.filter(item=>item.color=="Black");
            rendercards(newdata)
    })
    bluecolor.addEventListener("click",()=>{
        let newdata=data.filter(item=>item.color=="Brown");
            rendercards(newdata)
    })

}
                                            //adding search functionality
// search function 
let searchimg=document.getElementById("searchbtn")
function search_data_incl(data){
    searchimg.addEventListener("click",()=>{
      let b=document.getElementById("search_input");
      let c=b.value;
      let newArr=data.filter((el,index)=>{
        return (c=="all"||el.name.toLowerCase().includes(c.toLowerCase())||el.color.toLowerCase().includes(c.toLowerCase())||el.frametype.toLowerCase().includes(c.toLowerCase())||el.company.toLowerCase().includes(c.toLowerCase())||(el.rating)==c||Math.floor(el.rating)==c||(el.price)==c);
      })
      rendercards(newArr)
    })
  }
                                                    // WINDOW SCROOLL BUTTON JS   (RIGHT CORNER)
let scrollUp = document.querySelector('.scrollUp');
let pokewhite = 'https://img.icons8.com/ios/50/000000/up-arrow.png';
let pokeblack = 'https://img.icons8.com/ios-filled/50/000000/up-arrow.png';

scrollUp.setAttribute('src',pokewhite);
scrollUp.addEventListener('mouseenter',() =>{
    scrollUp.setAttribute('src',pokeblack);
})
scrollUp.addEventListener('mouseleave',() =>{
    scrollUp.setAttribute('src',pokewhite);
})
scrollUp.addEventListener('click',() =>{
    window.scrollTo(0,0);
})

//LINKING PROCESS OF EYEGLASS
let menn= document.querySelector("#meenn")
let womennn= document.querySelector("#woomenn")
let kidssss = document.querySelector("#kiids")
menn.addEventListener("click",() =>{
    let arr=[];
    arr.push("e");
  localStorage.setItem("type_page",JSON.stringify(arr));
  location.href = "../products/Product.html"
})
womennn.addEventListener("click",() =>{
    let arr=[];
    arr.push("e");
  localStorage.setItem("type_page",JSON.stringify(arr))
  location.href = "../products/Product.html"
})
kidssss.addEventListener("click",() =>{
    let arr=[];
    arr.push("k");
  localStorage.setItem("type_page",JSON.stringify(arr))
  location.href = "../products/Product.html"
})

//LINKING PROCESS OF SUNGLASSES
let me= document.querySelector("#sunnnmen")
let wo= document.querySelector("#sunnwo")
let ki = document.querySelector("#sunnkid")
me.addEventListener("click",() =>{
    let arr=[];
    arr.push("s");
  localStorage.setItem("type_page",JSON.stringify(arr));
  location.href = "../products/Product.html"
})
wo.addEventListener("click",() =>{
    let arr=[];
    arr.push("s");
  localStorage.setItem("type_page",JSON.stringify(arr))
  location.href = "../products/Product.html"
})
ki.addEventListener("click",() =>{
    let arr=[];
    arr.push("k");
  localStorage.setItem("type_page",JSON.stringify(arr))
  location.href = "../products/Product.html"
})




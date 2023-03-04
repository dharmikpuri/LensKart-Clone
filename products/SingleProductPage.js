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






                                            // displaying clicked product on dom


let product=JSON.parse(localStorage.getItem("product"));
let imgchange =document.getElementById("changingimg");
let glassesName =document.getElementById("glassesName");
let sizeofglass =document.getElementById("sizeofglass");
let priceofglass =document.getElementById("priceofglass");
let cartbtn =document.getElementById("cartbtn");
let checkdelivery =document.getElementById("checkdiliveryofp");
let cartarr=JSON.parse(localStorage.getItem("cartdata"))||[];


priceofglass.innerText=`₹ ${product[0].price}`;
sizeofglass.innerText=product[0].size;
glassesName.innerText=product[0].name;
imgchange.setAttribute("src",product[0].img);

// add to cart btn functionality
cartbtn.addEventListener("click",()=>{
    let flag=true;
   for(let item of cartarr){
    if(item.id==product[0].id){
        flag=false;
       break;
    }
   }    
    if(flag){
        cartarr.push(product[0])
        localStorage.setItem("cartdata",JSON.stringify(cartarr))
        swal(`${product[0].name} Added To Cart`,"","success")
    }else{
        swal("product is already in cart","","warning")
    }   
})

// checking delivery by pincode
checkdelivery.addEventListener("click",()=>{
    let pincode =document.getElementById("pincode").value;
    if(pincode.length<6 || pincode.length>6){
        swal("Enter Correct Pin Code","","warning")
    }else if(pincode=="000000"||pincode=="111111"){
        swal("Invalid Pin Code","","warning")
    }else{
        swal(`Delivery of ${product[0].name} is availble at your Pincode.`,"","success")
    }
})

//* accordion btn js for collapsing part */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// reviews btn
let reviewbtn=document.getElementById("reviewsbtn");
reviewbtn.innerText=`Review ${product[0].totalreviews}`;








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



    let data=JSON.parse(localStorage.getItem("cartdata"))||[];
    rendercards(data)



    function rendercards(data){
     
    var d=document.getElementById("leftside")   
console.log(d)
        d.innerHTML=null;
        data.forEach((el,index)=> {
            let carddiv=document.createElement("div");
            carddiv.setAttribute("class","item")
            let imgdiv=document.createElement("div");
            imgdiv.setAttribute("class","item_image")
            let image=document.createElement("img");
            image.setAttribute("src",el.img)
            imgdiv.append(image);
            let desdiv=document.createElement("div")
            desdiv.setAttribute("class","item_description")
            let childdiv=document.createElement("div")
            let pname=document.createElement("p")
            pname.innerText=el.name;
            let pPrice=document.createElement("p");
            pPrice.innerText=el.price;
            childdiv.append(pname,pPrice);
            let secondchilddiv=document.createElement("div");
            let fprice=document.createElement("p");
            fprice.innerText=el.price;
            let fdes=document.createElement("p");
            fdes.innerText="final price"
            secondchilddiv.append(fdes,fprice)

            let mickdiv=document.createElement("div");
            mickdiv.setAttribute("class","micky");
            mickdiv.style.fontSize="25px";
            
            let minus=document.createElement("span");
            minus.setAttribute("class","minus");
            minus.innerText="-"
            minus.style.paddingRight="15px";
            minus.style.cursor="pointer";
            let num=document.createElement("span");
            num.innerText="2"
            num.setAttribute("class","num");
            let plus=document.createElement("span");
            plus.setAttribute("class","plus");
            plus.innerText="+";
            plus.style.paddingLeft="15px"
            plus.style.cursor="pointer"
            
            mickdiv.append(minus,num,plus)
            let btndiv=document.createElement("div");
            let rembtn=document.createElement("button")
            rembtn.innerText="Remove"
            rembtn.style.cursor="pointer"
            rembtn.addEventListener("click",()=>{
                data.splice(index,1);
                localStorage.setItem("cartdata",JSON.stringify(data));
                rendercards(data);
            })
            let repbtn=document.createElement("button");
            repbtn.innerText="Repeat";
            repbtn.style.cursor="pointer"
           
            btndiv.append(rembtn,repbtn,mickdiv);
            desdiv.append(childdiv,secondchilddiv,btndiv);
            carddiv.append(imgdiv,desdiv);
            d.append(carddiv)

            let incbtm=document.createElement("button");
            incbtm="+";
            let value=2;
            plus.addEventListener("click",()=>{
                value++;
                num.innerHTML=value;
                let price=+el.price;
                let payprice=value*price
                fprice.innerText=payprice
                document.getElementById("totlprice").innerHTML=payprice;
                let fees=document.getElementById("fees").innerText;
                fees=+fees;
                let tax=document.getElementById("tax").innerText;
                tax=+tax;
                console.log(fees,tax)
                let payable=payprice+tax+fees;
                document.getElementById("payable").innerText=payable;
            })
            minus.addEventListener("click",()=>{
                value--;
                if(value==1){
                    mickdiv.setAttribute("class","micky");
                    repbtn.innerHTML="Repeat"
                }
                num.innerHTML=value;
                let price=+el.price;
                let changevalue=fprice.innerText
                changevalue=+changevalue;
                let payprice=changevalue-price
                fprice.innerText=payprice;
                document.getElementById("totlprice").innerHTML=payprice;
                let fees=document.getElementById("fees").innerText;
                fees=+fees;
                let tax=document.getElementById("tax").innerText;
                tax=+tax;
                console.log(fees,tax)
                let payable=payprice+tax+fees;
                document.getElementById("payable").innerText=payable;
            })
            
            btndiv.append()
            
            repbtn.addEventListener("click",()=>{
                fprice.innerText=value*el.price
                mickdiv.removeAttribute("class","micky");
                repbtn.innerHTML=null
            })
           
            carddiv.addEventListener("click",()=>{
                let arr=[];
                arr.push(el)
                localStorage.setItem("product",JSON.stringify(arr));
                // location.href = "./SingleProductPage.html";
            })
            // d.append(carddiv)
        });
        // numberofproducts.innerText=`${data.length}`
       
    }
    let btnnnnn= document.getElementById("proceddtoooooooooo")
    btnnnnn.addEventListener("click",() =>{
        location.href="../checkout.html"
    })
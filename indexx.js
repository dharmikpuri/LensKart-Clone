// NAV BAR HOVER DROPDOWN EFFECT JS

let boxDropdown = document.querySelectorAll('.boxDropdown');
for (let x = 0; x < document.querySelectorAll('li.categ').length; x++) {
    let list = document.querySelectorAll('li.categ')[x];
    let boxDropdown_list =  document.querySelectorAll('.boxDropdown')[x];
    list.addEventListener('mouseenter',() =>{
        boxDropdown_list.style.display = 'block';
        // swal("start","","warning")
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

//LINKING PROCESS OF EYEGLASS
let menn= document.querySelector("#meenn")
let womennn= document.querySelector("#woomenn")
let kidssss = document.querySelector("#kiids")
menn.addEventListener("click",() =>{
    let arr=[];
    arr.push("e");
  localStorage.setItem("type_page",JSON.stringify(arr));
  location.href = "./products/Product.html"
})
womennn.addEventListener("click",() =>{
    let arr=[];
    arr.push("e");
  localStorage.setItem("type_page",JSON.stringify(arr))
  location.href = "./products/Product.html"
})
kidssss.addEventListener("click",() =>{
    let arr=[];
    arr.push("k");
  localStorage.setItem("type_page",JSON.stringify(arr))
  location.href = "./products/Product.html"
})

//LINKING PROCESS OF SUNGLASSES
let me= document.querySelector("#sunnnmen")
let wo= document.querySelector("#sunnwo")
let ki = document.querySelector("#sunnkid")
me.addEventListener("click",() =>{
    let arr=[];
    arr.push("s");
  localStorage.setItem("type_page",JSON.stringify(arr));
  location.href = "./products/Product.html"
})
wo.addEventListener("click",() =>{
    let arr=[];
    arr.push("s");
  localStorage.setItem("type_page",JSON.stringify(arr))
  location.href = "./products/Product.html"
})
ki.addEventListener("click",() =>{
    let arr=[];
    arr.push("k");
  localStorage.setItem("type_page",JSON.stringify(arr))
  location.href = "./products/Product.html"
})

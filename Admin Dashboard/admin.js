let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}
let url="totalproduct.json";
fecthdata(url);
async function fecthdata(url){
  try {
    let data=await fetch(url);
    let actualdata=await data.json();
    console.log(actualdata)
  } catch (error) {
    console.log(error)
  }
} 
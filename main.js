const buyBtns = document.querySelectorAll('.btn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal-close');
const modalContainer=document.querySelector('.js-modal-container');
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',openModal)
}
close.addEventListener('click',closeModal)   
modal.addEventListener('click',closeModal)
modalContainer.addEventListener('click',function(event){
event.stopPropagation();
})
function openModal(){
    modal.classList.add('open');
}

function closeModal(){
    modal.classList.remove('open');
}
var hElement=document.getElementById('header');
var mMenu=document.getElementById('menu-bt');
var hHeight=hElement.clientHeight;

mMenu.onclick=function(){
    var isClose=hElement.clientHeight===hHeight;
    console.log(isClose);
    if (isClose){        hElement.style.height='auto';
}else{
hElement.style.height="46px";
    }
}

var menuItems=document.querySelectorAll('#nav li a[href*="#"]');
for (var i=0;i<menuItems.length;i++){
    var menuItem=menuItems[i];
        menuItem.onclick=function() {
            var isParentMenu=this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if (isParentMenu){
            event.preventDefault();
        } else{
            hElement.style.height="46px";
        }
        
    }
}
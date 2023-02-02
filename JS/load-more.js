var benefits_package = document.querySelectorAll('.wrapper-gallery');
var btn_load = document.querySelector('.btn-load-more');
var benefitCurrent = 1

function showMore() {
    for (var i = benefitCurrent; i < benefitCurrent + 1; i++) {
        console.log(i);
        if (benefits_package[i]) {
            console.log(benefits_package[i]);
            benefits_package[i].style.display = 'block';
        }   
    }
    benefitCurrent += 1;
    if(benefitCurrent>=benefits_package.length){
        btn_load.style.display = 'none'
    }
}
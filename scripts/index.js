// index.js 시작
const introSlide = new Swiper('.intro_page', {
    direction: 'vertical',
    mousewheel: {
    releaseOnEdges: true,
},
    //어떤 이벤트가 발생했을 때 적는 곳
    on: {
        slideChange: function () {
            const header = document.querySelector('header');
            if (this.activeIndex === 1 || this.activeIndex >= 3) {
                header.classList.add('black');
            } else {
                header.classList.remove('black');
            }
        }
    }
});
const mainMenu = document.querySelectorAll('.main_menu a');

for (let i = 0; i < mainMenu.length; i++) { //a의 수만큼 반복
    mainMenu[i].addEventListener('click', function(e) {
        e.preventDefault(); //a의 기본 이동을 막음
        const slideNumber = this.dataset.slide;
        introSlide.slideTo(slideNumber, 500); //특정슬라이드로 이동
    });
}
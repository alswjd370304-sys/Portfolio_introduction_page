// index.js 시작
const introSlide = new Swiper('.intro_page', {
    direction: 'vertical',
    mousewheel: true,
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

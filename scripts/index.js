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

// 7행 그래픽 팝업
//변수
const graphicImg = document.querySelectorAll('.graphic_design_img img');
const graphicPopup = document.querySelector('.graphic_popup');
const popupImg = document.querySelector('.popup_content img');
//swiper 때문에 팝업 위로 올라오는 헤더 문제 해결
//팝업을 실행하면 HTML 바디의 가장 마지막으로 이동 -> swiper에 영향을 받지 않게 하기 위해서
document.body.appendChild(graphicPopup);

// 0부터 그래픽디자인 이미지의 인덱스 수만큼 증가
for (let i = 0; i < graphicImg.length; i++) {
    graphicImg[i].addEventListener('click', function () {
        //지금 클릭한 이미지의 detail이름의 데이터를 팝업 src에 대입해라
        popupImg.src = this.dataset.detail;
        //클릭했을때 모든 팝업이 보이도록 해라
        graphicPopup.style.display = 'flex';
    });
}
// 어두운 배경 클릭
graphicPopup.addEventListener('click', function (e) {
    //실제로 클릭한 요소가 어두운 배경이라면 css에서 display를 non로 바꿔란
    if (e.target === graphicPopup) {
        graphicPopup.style.display = 'none';
    }
});
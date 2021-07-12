//어떤 tab이 클릭되었는지 확인하기 위해 nav 요소 가져오기
const nav = document.querySelector('nav');
//클릭된 탭의 content의 내용을 표기하는 요소 
const tabContents = document.querySelectorAll(".tab-content");
//탭을 클릭하였을 때의 효과를 넣어주기 위한 요소
const glider = document.querySelector(".glider");


let currentTabIndex = 0;

function tabStyle(e){
    //클릭된 요소의 index 값을 얻어온다 
    currentTabIndex = e.target.dataset.index;
    //클릭된 요소의 index에 100을 곱한만큼 width가 이동된다 
    glider.style.transform = `translate3D(${currentTabIndex * 100}%, 0,0)`;
    //tabContent array를 forEach를 통해서 하나하나 접근한다 , index값은 어떤 tabContent가 
    //클릭되었는지 알아내기 위한 값이다
    tabContents.forEach((tabContent, index) => {
        //만약 현재tab인덱스와 입력된 값의 index 값이 같을 경우 active class를 toggle한다 
        tabContent.classList.toggle('active', parseInt(currentTabIndex) == index);
    });
}
//nav요소들을 클릭할때마다 tabStyle함수를 실행한다 
nav.addEventListener("click",tabStyle);
Scroll Spy 

scroll spy 란? 
: 여러개의 content 들이 담겨져 있는 곳에서 scroll을 내리면 변하는 content내용에 맞게 nav 태그에 애니메이션 효과를 준다 또는 자신이 보기 원하는 nav를 클릭하게 되면 해당 content로 위치가 이동한다 

nav 스크롤을 내려도 같은 위치(=top : 0 인 위치)에 계속 있도록 스타일링 작업 
position: sticky 또는 position: fixed 사용할 수 있다 
이때 z-index를 사용하여서 다른 content와 겹치지 않고 항상 맨 위에서 보이도록 한다  


구현한 기능 
1. 스크롤링을 통해서 content이동시 nav에서 어떤 content가 보여지고 있는지 색깔 변경을 통해 유저에게 알림
2. nav의 버튼을 클릭하면 해당 content로 이동 

구현할 때 사용한 것들 
1. clientHeight등 window의 길이들을 알려주는 dom 기능들을 활용 
2. scrollIntoView를 통해서 버튼 클릭시 해당 내용으로  scrolling작업 되도록 함
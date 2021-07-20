const movie_list = [
    {
        title: '블랙위도우',
        poster: 'img/movie_poster1.jpg'
    },
    {
        title: '이스케이프룸2',
        poster: 'img/movie_poster2.jpg'
    },
    {
        title: '스페이스 잼',
        poster: 'img/movie_poster3.jpg'
    },
    {
        title: '발신제한',
        poster: 'img/movie_poster4.jpg'
    },
    {
        title: '오필리아',
        poster: 'img/movie_poster5.jpg'
    },
    {
        title: '꽃다발 같은 사랑을 했다',
        poster: 'img/movie_poster6.jpg'
    },
    {
        title: '킬러의 보디가드2',
        poster: 'img/movie_poster7.jpg'
    },
    {
        title: '미드나이트',
        poster: 'img/movie_poster8.jpg'
    },
    {
        title: '루카',
        poster: 'img/movie_poster9.jpg'
    },
    {
        title: '보스베이비2',
        poster: 'img/movie_poster10.jpg'
    }
];

const boxoffice_list = document.querySelector('.boxoffice_list');
const left_btn = document.querySelector('.left_btn');
const right_btn = document.querySelector('.right_btn');


let currentIndex = 0; 

function printPoster(){
    for(let i =0; i<5; i++){
        let p = '.p' + String(i);
        let op = 0;
        movie_list.forEach(e => {
            let img =document.createElement('img');
            
            img.setAttribute('src',e.poster);
            img.setAttribute('alt',e.title);
            img.setAttribute('z-index',op);
            op += 1;
            document.querySelector(p).appendChild(img);
        })
    }
    
}


function clickLeft(){
    
}

function clickRight(){
    
}




document.addEventListener("DOMContentLoaded", printPoster );

left_btn.addEventListener("click",clickLeft );
right_btn.addEventListener("click",clickRight );
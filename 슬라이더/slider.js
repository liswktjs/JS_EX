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
const poster = document.querySelector('poster');

let currentIndex = 0;
let isMoving = false;
const DURATION = 500; 

function printPoster(){
    const poster_list0 = [movie_list[9], ...movie_list, movie_list[0]];
    const poster_list1 = [movie_list[0], movie_list.slice(1,10),movie_list.slice(0,2)];
    const poster_list2 = [movie_list[1], movie_list.slice(2,10),movie_list.slice(0,3)];
    const poster_list3 = [movie_list[2], movie_list.slice(3,10),movie_list.slice(0,4)];
    const poster_list4 = [movie_list[3], movie_list.slice(4,10),movie_list.slice(0,5)];
    

    const poster = poster_list0.map(({title,poster,index}) => `
        <div class="poster" poster-index='${index}'>
            <img src='${poster}' alt='${title}'/>
        </div>
    `);
    const poster1 = poster_list1.map(({title,poster,index}) => `
        <div class="poster" poster-index='${index}'>
            <img src='${poster}' alt='${title}'/>
        </div>
    `);
    const poster2 = poster_list2.map(({title,poster,index}) => `
        <div class="poster" poster-index='${index}'>
            <img src='${poster}' alt='${title}'/>
        </div>
    `);
    const poster3 = poster_list3.map(({title,poster,index}) => `
        <div class="poster" poster-index='${index}'>
            <img src='${poster}' alt='${title}'/>
        </div>
    `);
    const poster4 = poster_list4.map(({title,poster,index}) => `
        <div class="poster" poster-index='${index}'>
            <img src='${poster}' alt='${title}'/>
        </div>
    `);
    boxoffice_list.insertAdjacentHTML('afterbegin',poster);
    boxoffice_list.insertAdjacentHTML('afterbegin',poster1);
    boxoffice_list.insertAdjacentHTML('afterbegin',poster2);
    boxoffice_list.insertAdjacentHTML('afterbegin',poster3);
    boxoffice_list.insertAdjacentHTML('afterbegin',poster4);

    /*(movie_list.map(({poster,index}) => `
    <div class="poster" data-index='${index}'>
        <img src="${poster}" alt="영화포스터이미지"/>
    </div>
    `*/
    move(++currentIndex);

}

function move(currentIndex, duration = 0){
    

}

function clickLeft(){
    
}

function clickRight(){
    
}




document.addEventListener("DOMContentLoaded", printPoster );

left_btn.addEventListener("click",clickLeft );
right_btn.addEventListener("click",clickRight );
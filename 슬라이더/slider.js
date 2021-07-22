const movie_list = [
    {
        title: '블랙위도우',
        poster: 'img/movie_poster1.jpg',
        ranking: 1
    },
    {
        title: '이스케이프룸2',
        poster: 'img/movie_poster2.jpg',
        ranking: 2
    },
    {
        title: '스페이스 잼',
        poster: 'img/movie_poster3.jpg',
        ranking: 3
    },
    {
        title: '발신제한',
        poster: 'img/movie_poster4.jpg',
        ranking: 4
    },
    {
        title: '오필리아',
        poster: 'img/movie_poster5.jpg',
        ranking: 5
    },
    {
        title: '꽃다발 같은 사랑을 했다',
        poster: 'img/movie_poster6.jpg',
        ranking: 6
    },
    {
        title: '킬러의 보디가드2',
        poster: 'img/movie_poster7.jpg',
        ranking: 7
    },
    {
        title: '미드나이트',
        poster: 'img/movie_poster8.jpg',
        ranking: 8
    },
    {
        title: '루카',
        poster: 'img/movie_poster9.jpg',
        ranking: 9
    },
    {
        title: '보스베이비2',
        poster: 'img/movie_poster10.jpg',
        ranking: 10
    }
];

const boxoffice_list = document.querySelector('.boxoffice_list');

const printPoster = (boxoffice_list,movie_list) => {
    const left_btn = document.querySelector('.left_btn');
    const right_btn = document.querySelector('.right_btn');

    let currentIndex = 0; 

    let p0 = document.querySelector('.p0');
    let p1 = document.querySelector('.p1');
    let p2 = document.querySelector('.p2');
    let p3 = document.querySelector('.p3');
    let p4 = document.querySelector('.p4');

    document.addEventListener('DOMContentLoaded', () => {
        for(let i =0; i<5; i++){
            let p = '.p' + String(i);
            document.querySelector(p).innerHTML = `
            ${movie_list.map( e => 
                `<img src="${e.poster}"
                alt = "${e.title}"
                data-id = "${e.ranking}"
                class = "poster${e.ranking}" />`
            ).join('')}`;
            
            /*movie_list.map(function(e, index) {
                let img =document.createElement('img');
                let c = 'poster' + String(index);
                img.setAttribute('src',e.poster);
                img.setAttribute('alt',e.title);
                img.classList.add(c);
                img.setAttribute('data-id',e.ranking);
                
                //img.setAttribute('z-index', -1);
                document.querySelector(p).appendChild(img);
            });*/
            
        }
        p0.querySelector('.poster1').style.zIndex = '999';
        p1.querySelector('.poster2').style.zIndex = '999';
        p2.querySelector('.poster3').style.zIndex = '999';
        p3.querySelector('.poster4').style.zIndex = '999';
        p4.querySelector('.poster5').style.zIndex = '999'; 
    });

    left_btn.onclick = () => {
        
    };

    right_btn.onclick = () => {

    };

}

printPoster(boxoffice_list,movie_list);
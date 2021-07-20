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
    }
];

const boxoffice_list = document.querySelector('.boxoffice_list');
const left_btn = document.querySelector('.left_btn');
const right_btn = document.querySelector('.right_btn');

const carousel = (boxoffice_list, movie_list) => {
    let currentSlide = 0;
    let isMoving = false;
    const DURATION = 500;
    let poster = null;

    const move = (currentSlide, duration = 0) => {
        if (duration) isMoving = true;
        poster.style.setProperty('--duration', duration);
        poster.style.setProperty('--currentSlide', currentSlide);
    };

    document.addEventListener('DOMContentLoaded', () => {
        boxoffice_list.innerHTML = `
        <div class="poster">
            ${[movie_list[movie_list.length-1], ...movie_list,movie_list[0]]
            .map(movie => `<img src='${movie.poster}' alt='${movie.title}'>`).join('')}
        </div>
        `;
        poster = document.querySelector('.poster');
        
    });

    window.onload = () => {
        boxoffice_list.style.opacity = 1;
        move(++currentSlide);
    };

    boxoffice_list.ontransitionend = () => {
        isMoving = false;
        const delta = currentSlide === 0 ? 1 : currentSlide === 5 + 1 ? -1 : 0;
        if(!delta) return;
    
        currentSlide += 5 * delta;
        move(currentSlide);
    };

    left_btn.onclick = () =>{
        if (isMoving) return;
        currentSlide  = currentSlide - 1;
        move(currentSlide, DURATION);
    };

    right_btn.onclick = () => {
        if (isMoving) return;
        currentSlide = currentSlide + 1;
        move(currentSlide, DURATION);
    };
}

carousel(boxoffice_list, movie_list);

/*function printPoster(){
    boxoffice_list.innerHTML = `
    <div class="poster">
        ${[movie_list[movie_list.length-1], ...movie_list,movie_list[0]]
        .map(movie => `<img src='${movie.poster}' alt='${movie.title}'>`).join('')}
    </div>
    `;
    
    move(++currentSlide);
}
*/



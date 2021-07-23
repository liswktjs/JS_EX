//영화 정보를 담아 놓은 리스트 
//제목과 포스터 이미지 그리고 순위를 표기한다 
//순위를 알아야 순위대로 정렬할 수 있으므로
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

//화면상에 포스터들을 보여지게 한다 
const printPoster = (boxoffice_list, movie_list) => {
    const left_btn = document.querySelector('.left_btn');
    const right_btn = document.querySelector('.right_btn');
    
    //각각의 p0,p1...이 현재 표기하고 있는 포스터의 랭킹을 표기하는 리스트
    let p_index = [
        1,2,3,4,5
    ];

    const p0 = document.querySelector('.p0');
    const p1 = document.querySelector('.p1');
    const p2 = document.querySelector('.p2');
    const p3 = document.querySelector('.p3');
    const p4 = document.querySelector('.p4');

    const ps_index = [
        p0,p1,p2,p3,p4
    ];

    //DOM이 로드되면 p0,p1..을 차례대로 방문하여 
    //각각의 p0,p1..에 movie_list 정보에 따라 img 10개를 삽입한다 
    document.addEventListener('DOMContentLoaded', () => {
        for(let i =0; i<5; i++){
            ps_index[i].innerHTML = `
            ${movie_list.map( e => 
                `<img src="${e.poster}"
                alt = "${e.title}"
                data-id = "${e.ranking}"
                class = "poster${e.ranking}" />`
            ).join('')}`;
        }
        
        //처음 로드되었을 때 1등 2등 3등 4등 5등 순서대로 표기하기 위해서 zIndex를 활용해서 처리해준다
        for (let i =0; i < 5; i++) {
            ps_index[i].querySelector('.poster' + String(p_index[i])).style.zIndex = '999';
        } 
        
        
    });

    //왼쪽 화살표를 클릭할때에 첫번째 1등 영화가 있던 것이 10등 영화가 보이게 처리하는 방식
    left_btn.onclick = () => {
        for (let i =0; i < 5; i++){
            //원래 표기 하던 것을 보여지지 않게 zIndex를 수정해준다
            ps_index[i].querySelector('.poster' + String(p_index[i])).style.zIndex = '-1';
            p_index[i] = plus(p_index[i]);
            ps_index[i].querySelector('.poster'+ String(p_index[i])).style.zIndex = '999';
        }  
    };                                                                                 
    //오른쪽 화살표를 클릭할 때에 첫번째 1등 영화가 있던 것이 2등 영화가 보이게 처리하는 방식
    right_btn.onclick = () => {
        for (let i =0; i < 5; i++) {
            ps_index[i].querySelector('.poster' + String(p_index[i])).style.zIndex = '-1';
            p_index[i] = minus(p_index[i]);
            ps_index[i].querySelector('.poster' + String(p_index[i])).style.zIndex = '999';
        }

    };

    //1등부터 10등까지의 영화만을 보여줄 것이므로 만약 이들을 가리키는 index가 
    //10이라면 1로 바꾸어주고 아니라면 +1를 해준다 
    function plus(e){
        if (e == 10) {
            e = 1;
        }
        else{
            e += 1;
        }
        return e;
    }
    //위와 마찬가지의 이유로 만약 index가 1이라면 10으로 바꾸어주고 
    //아니라면 -1를 해준다 
    function minus(e){
        if (e == 1){
            e = 10;
        }else{
            e -= 1;
        }
        return e;
    }
    //만일 유저가 블랙위도우 포스터를 클릭했을 경우 새로운 링크로 이동하도록 처리 한다  
    boxoffice_list.onclick = ({target}) => {
        if('블랙위도우' == target.alt){
            location.href = './link.html';
        }
    }
}

printPoster(boxoffice_list,movie_list);
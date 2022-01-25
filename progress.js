function moveProgress(current){
    document.querySelector('.progress-bar span').style.width = `${((100 / 4) * current)}%`; 
}


export default function progress(){
    let progressBar = {
        current : 0,
    }
    this.init = () => {
        document.querySelector('#prev').addEventListener('click', () => {
            progressBar.current--;
            if(progressBar.current < 0) {
                progressBar.current = 0;
            }
            moveProgress(progressBar.current)

        });
        document.querySelector('#next').addEventListener('click', () => {
            progressBar.current++;
            if(progressBar.current > 4){
                progressBar.current = 4;
            }
            moveProgress(progressBar.current);
        });
    }
}

const p = new progress();
p.init();
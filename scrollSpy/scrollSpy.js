export default function scrollSpy(){
    
    const navElem = document.querySelector('.nav');
    const navItems = Array.from(navElem.children);
    const contentElem = document.querySelector('.container');
    const contentItems = Array.from(contentElem.children);
    const offsetTops = contentItems.map((elem) => {
    const [ofs, clh] = [elem.offsetTops , elem.clientHeight];
    return [ofs- clh / 2, ofs + clh / 2]; 
    })
    
    this.init = () => {
        scrollEvent();
        navEvent();
        
    }
    const scrollEvent = () => {
        window.addEventListener('scroll', (e) => {
            const {scrollTop} = e.target.scrollingElement;
        })
    }
    const navEvent = () => {
        navElem.addEventListener('click', (e) => {
            const targetElem = e.target;
            if(targetElem.tagName === 'BUTTON'){
                const targetIndex = navItems.indexOf(targetElem.parentElement);
                contentItems[targetIndex].scrollIntoView({
                    block: 'start',
                    behavior: 'smooth',
                })
            }
        })
    }
}

const s = new scrollSpy();
s.init();
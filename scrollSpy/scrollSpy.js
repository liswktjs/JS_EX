export default function scrollSpy(){
    
    const navElem = document.querySelector('.nav');
    const navItems = Array.from(navElem.children);
    const contentElem = document.querySelector('.container');
    const contentItems = Array.from(contentElem.children);

    

    const styleNavItem = (index) => {
        Array.from(navElem.children).forEach((c, i ) => {
            if (i === index){
                c.classList.add('on');
            }else{
                c.classList.remove('on');
            }
        })
    }

    const getoffsetTops = () => {
        let res = contentItems.map(elem => {
            const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
            return [ofs - clh / 2, ofs + clh / 2]
        })
        return res;
    }

    
    this.init = () => {
        scrollEvent();
        navEvent();
    }
    
    const scrollEvent = () => {
        window.addEventListener('scroll', e => {
            const {scrollTop} = e.target.scrollingElement;
            const targetArray = getoffsetTops();
            targetArray.forEach((element, index) => {
                if(element[0] <= scrollTop && scrollTop < element[1]){
                    console.log(element, scrollTop, index);
                    styleNavItem(index);
                }
            })
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
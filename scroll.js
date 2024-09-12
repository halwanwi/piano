const movable = $('.control')[0];
let startX, initialX;

const piano = $('.piano')[0];
const jumlahIsiLebar = piano.children[0].offsetWidth * piano.children.length;
const kontenerLebar = piano.offsetWidth;
const maxTampil = jumlahIsiLebar - kontenerLebar;

movable.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    const rect = movable.getBoundingClientRect();

    startX = touch.clientX;
    initialX = rect.left;
});



movable.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const deltaX = touch.clientX - startX;
    let newX = initialX + deltaX;
    const parentRect = movable.parentElement.getBoundingClientRect();
    const movableRect = movable.getBoundingClientRect();
    const mentokKanan = parentRect.width - movableRect.width;

    if (newX < 0) newX = 0;
    if (newX + movableRect.width > parentRect.width) newX = mentokKanan;

    movable.style.left = newX + 'px';


    let persen = parseInt( parseInt(newX) / mentokKanan * 100 );
    
    for (let i = 0; i < piano.children.length; i++) {
        // console.log(maxTampil * persen / 100);
        $('.piano > div')[i].style.right = (maxTampil * persen / 100) + 'px';
    }
    
});
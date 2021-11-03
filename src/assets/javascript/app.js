/** 
 *  @author alexandercddev
 *  @description  
 *  @date 02/noviembre/2021 
**/

const defaultClass = '';

const selectElement = document.getElementById('action');
selectElement.addEventListener('change', ({ target}) => {
    let head = document.getElementById('head');
    let antennas = document.getElementById('antennas');
    let body = document.getElementById('body');
    let lengs = document.getElementById('lengs');
    let container = document.getElementById('content-android');
    head.className = ``;
    antennas.className = ``;
    body.className = ``;
    lengs.className = ``;
    container.className = ``;
    switch(target.value) {
        case 'hello': 
        head.className = `animation-${target.value}`;
            antennas.className = `animation-${target.value}`;
            body.className = `animation-${target.value}`;
            break;
        case 'yes': 
        case 'no':  
            head.className = `animation-${target.value}`;
            antennas.className = `animation-${target.value}`;
            break;
        case 'jump':
            head.className = `animation-${target.value}`;
            antennas.className = `animation-${target.value}`;
            body.className = `animation-${target.value}`;
            lengs.className = `animation-${target.value}`;
            break;
        case 'disarm':
            head.className = `animation-${target.value}`;
            antennas.className = `animation-${target.value}`;
            body.className = `animation-${target.value}`;
            lengs.className = `animation-${target.value}`;
            break;
        case 'cha':
            body.className = `animation-${target.value}`;
            lengs.className = `animation-${target.value}`;
            container.className = `animation-${target.value}`;
            break;
    }
}); 
const color = document.getElementById('colorPicker')
const eraser = document.getElementById('btn')
const reset = document.getElementById('reset')
const container = document.querySelector('.container')
const box = document.createElement('div');

box.classList.add('box');

const fragment = new DocumentFragment();

for(let i=0; i<100; i++) {
    fragment.appendChild(box.cloneNode(true));
    
}

// finally append dom fragment to parent
container.appendChild(fragment);

document.querySelector('.container').addEventListener('click',(e)=>{
    e.target.classList.toggle('bg');
    e.target.style.backgroundColor = color.value;
    
    eraser.addEventListener('click', ()=>{
        color.value = eraser.name
    })

    reset.addEventListener('click', ()=>{
        e.target.style.backgroundColor = reset.name;
    })
})

// console.log(eraser)
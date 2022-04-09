const btn = document.getElementById('change');
btn.addEventListener('click',function(){
    document.body.classList.toggle('ubah');
});

const merah = document.querySelector('input[name=smerah]');
const hijau = document.querySelector('input[name=shijau]');
const biru = document.querySelector('input[name=sbiru]');

merah.addEventListener('input',function(){
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    const code = document.querySelector('span');
    code.innerHTML = `${r},${g},${b}`;
});
hijau.addEventListener('input',function(){
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    const code = document.querySelector('span');
    code.innerHTML = `${r},${g},${b}`;
});
biru.addEventListener('input',function(){
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    const code = document.querySelector('span');
    code.innerHTML = `${r},${g},${b}`;
});
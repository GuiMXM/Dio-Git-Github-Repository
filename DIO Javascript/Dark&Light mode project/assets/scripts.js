const btn =  document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];



btn.addEventListener('click', changeMode)


function changeMode(){
    
    changeClasses();
    changeText();
}

function changeClasses(){
btn.classList.toggle('dark-mode')
h1.classList.toggle( 'dark-mode')
body.classList.toggle( 'dark-mode')
footer.classList.toggle('dark-mode' )
}

function changeText(){
    if(btn.classList.contains('dark-mode')){
        btn.innerHTML ='light-mode';
        h1.innerHTML = 'dark-mode ON';
        return;
    }
    btn.innerHTML = 'dark-mode';
     h1.innerHTML= 'light-mode ON';


}



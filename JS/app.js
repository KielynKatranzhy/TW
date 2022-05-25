let inputText=document.querySelector('.inputText');
    submitForm=document.querySelector('.submitForm');
    information=document.querySelectorAll('.search');

    searchFunction=(text)=>{
        information.forEach((element)=>{
            if(element.textContent==text){
                element.style="animation:animationElement 10s;";
                console.log(element);
            }
        });
    }
submitForm.addEventListener('click',(e)=>{
    e.preventDefault();
    searchFunction(inputText.value);
});
function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");

     if(dots.style.display === "none") {
         dots.style.display="inline";
         btn.innerHTML="More";
         more.style.display="none";
     } else {
         dots.style.display="none";
         btn.innerHTML="Hide";
         more.style.display="inline";
     }
}
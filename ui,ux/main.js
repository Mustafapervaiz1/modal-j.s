let modalbtn1 = document.getElementById('modalbtn1');
let modalbtn2 = document.getElementById('modalbtn2');
let modalbtn3 = document.getElementById('modalbtn3');


let cover = document.getElementById('cover');

modalbtn1.addEventListener("click", function () {
  cover.classList.toggle('hide')
});


modalbtn2.addEventListener("click", function () {
  cover.classList.toggle('hide')
});


modalbtn3.addEventListener("click", function () {
  cover.classList.toggle('hide')
});


document.getElementById('close_btn').addEventListener('click', (e) =>{
  cover.classList.add('hide')
})
  /*                       modalbtn2           start         */
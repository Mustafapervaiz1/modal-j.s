let modalshow1 = document.getElementById("modalshow1")

let hidden_button=document.getElementById("hidden_button");

let modal_container=document.getElementById("modal_container");

modalshow1.addEventListener(`click`, function (){
modal_containerclasslist.add("active") 
})


hidden_button.addEventListener(`click`, function (){
modal_containerclasslist.remove("active") 
})




//  modalshow1 =( )=> {
//     modalshow1 = document.getElementById("para")
// }
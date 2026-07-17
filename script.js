// Aurevix Website Script

console.log("Aurevix Website Loaded Successfully");


const button = document.querySelectorAll("button");


button.forEach(btn => {

    btn.addEventListener("click",()=>{

        console.log("Button Clicked");

    });

});
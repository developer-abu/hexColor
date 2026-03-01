  let success = document.getElementById("success");
  let failure = document.getElementById("failure");

  let colorDiv = document.querySelectorAll(".childDiv");







  for(let i of colorDiv){

   i.addEventListener("click", ()=>{
    navigator.clipboard.writeText(i.textContent)
    .then(()=>{
success.volume = 0.3;
success.play();

let actualText= i.textContent;

i.innerHTML=`Copied Successful`;

setTimeout(()=>{
i.innerHTML = actualText
},1000)

    })
    .catch((err)=>{

success.volume = 0.3;
failure.play();

let actualText= i.textContent;

i.textContent =`Copied is not Successful`;

setTimeout(()=>{
i.textContent = actualText
},1000)


    })
   })

i.addEventListener("mouseenter", ()=>{
i.style.cursor="pointer"
})

  }

  let success = document.getElementById("success");
  let failure = document.getElementById("failure");
  let colorDiv = document.querySelectorAll(".childDiv");
  for(let i of colorDiv){

   i.addEventListener("click", ()=>{
    navigator.clipboard.writeText(i.textContent)
    .then(()=>{

success.play()
    })
    .catch((err)=>{
failure.play()
    })
   })

i.addEventListener("mouseenter", ()=>{
i.style.cursor="pointer"
})

  }
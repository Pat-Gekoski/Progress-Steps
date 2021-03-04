const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let activeStep = 1;



next.addEventListener('click', function() {
   activeStep++;
   
   if (activeStep > circles.length){
      activeStep = circles.length
   }

   update() 
})

prev.addEventListener('click', function(){
   if (activeStep > 1){
      activeStep--;
   }

   update()
})

const update = () => {

   if (activeStep === 1){
      prev.disabled = true
   } else if (activeStep === circles.length) {
      next.disabled = true
   } else {
      prev.disabled = false
      next.disabled = false
   }

   circles.forEach((circle, index) => {
      if (index + 1 > activeStep){
         circle.classList.remove('active')
      } else {
         circle.classList.add('active')
      }
   })

   const actives = document.querySelectorAll('.circle.active');

   progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"

}
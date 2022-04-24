const header= document.querySelector("header");
const first_skill=document.querySelector(".skill:first-child");
const sk_counters = document.querySelector(".counter span");
const progress_bars = document.querySelector(".skills svg circle");
const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelector(".number span");
window.addEventListener("scroll", () =>{
 if(!skillsPlayed) skillsCounter();
 mlCounter();
} 

);

function stickyNavbar(){
  header.classList.toggle("scrolled", window.pageYOffset >0 );


}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);





let sr=ScrollReveal({ 
  duration:2500,
  distance:"60px",
});

sr.reveal(".showcase-info", {delay:600 });
sr.reveal(".showcase-image", {origin:"top", delay:700 });



// skills
function hasReached(el) {
  let topPosition = el.getBoundingClientRect ().top;
  
  if(window.innerHeight >= topPosition + el.offsetHeight ) return true;
  else false;

}



function skillsCounter(){
  if(!hasReached(first_skill)) return;
 
  progress_bars.forEach(
    (p) => (p.style.animation = "progress 2s ease-in-out forwards")
    ) ;

    
  }

function mlCounter() {
  if (!hasReached(ml_section)) return;
  console.log("mixvedi")
}

  
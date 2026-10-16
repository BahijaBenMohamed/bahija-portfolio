const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
const themeToggle=document.querySelector(".theme-toggle");

menuToggle?.addEventListener("click",()=>navLinks.classList.toggle("open"));

navLinks?.querySelectorAll("a").forEach(a=>{
  a.addEventListener("click",()=>navLinks.classList.remove("open"));
});

themeToggle?.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  themeToggle.textContent=document.body.classList.contains("dark")?"☀":"☾";
  localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light");
});

if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
  themeToggle.textContent="☀";
}

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

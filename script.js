const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{
  reveals.forEach(reveal=>{
    const top = reveal.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      reveal.classList.add('active');
    }
  })
});

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<120;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    size:Math.random()*2,
    speedX:(Math.random()-.5)*0.5,
    speedY:(Math.random()-.5)*0.5
  })
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.x += p.speedX;
    p.y += p.speedY;

    if(p.x > canvas.width || p.x < 0) p.speedX *= -1;
    if(p.y > canvas.height || p.y < 0) p.speedY *= -1;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle='rgba(0,255,255,.7)';
    ctx.fill();
  })

  requestAnimationFrame(animate);
}



const reviews = [
  {
    name: "Linh Nguyen",
    age: 30,
    gender: "female",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "“Excellent full-stack developer with strong expertise in React.js and modern UI engineering. Delivers clean, scalable, and maintainable code.”"
  },
  {
    name: "Mai Tran",
    age: 40,
    gender: "female",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "“Strong system design thinking and backend integration skills. Produces high-quality, production-ready code with great structure.”"
  },
  {
    name: "Thu Nguyen",
    age: 25,
    gender: "female",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "“Highly creative UI developer with a strong sense of design and detail. Builds modern and user-friendly interfaces.”"
  },

  {
    name: "Minh Pham",
    age: 33,
    gender: "male",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "“Strong backend developer with solid Node.js and API design skills. Reliable in building scalable server-side systems.”"
  },
  {
    name: "Tuan Le",
    age: 51,
    gender: "male",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "“Excellent engineering leadership and system architecture experience. Strong ability to design and guide complex systems.”"
  },
  {
    name: "Khoa Nguyen",
    age: 39,
    gender: "male",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    text: "“Very dependable full-stack engineer with strong problem-solving skills and consistent delivery of high-quality solutions.”"
  },
];

function openReviews(){
  const modal = document.getElementById("reviewModal");
  const list = document.getElementById("reviewList");

  list.innerHTML = "";

  reviews.forEach(r=>{
    const card = document.createElement("div");
    card.className = "review-card";

    card.innerHTML = `
      <img src="${r.img}" />
      <h3>${r.name}</h3>
      <p>Age: ${r.age} | ${r.gender}</p>
      <div class="stars">★★★★★</div>
      <p style="font-size:13px;color:#ccc;margin-top:10px;">${r.text}</p>
    `;

    list.appendChild(card);
  });

  modal.style.display = "flex";
}

function closeReviews(){
  document.getElementById("reviewModal").style.display = "none";
}

document.querySelector('a[href="#reviews"]').addEventListener("click", (e)=>{
  e.preventDefault();
  openReviews(); // auto open modal
});

animate();

window.addEventListener("scroll", () => {
  const computer = document.querySelector(".computer");

  let scrollY = window.scrollY;

  computer.style.transform =
    `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.02}deg)`;
});

const robot = document.querySelector(".robot");

document.addEventListener("mousemove", (e)=>{

  let x = (e.clientX - window.innerWidth/2) / 30;
  let y = (e.clientY - window.innerHeight/2) / 30;

  robot.style.transform =
    `translate(${x}px, ${y}px)
     rotate(${x}deg)`;

});

const images = [
  "./imgs/business/output (1).jpg",
  "./imgs/business/output (2).jpg",
  "./imgs/business/output.jpg"
];

let index = 0;

const imgElement = document.getElementById("carouselImg");

function showImage(){
  imgElement.style.opacity = "0";
  imgElement.style.transform = "scale(0.95)";

  setTimeout(() => {
    imgElement.src = images[index];

    imgElement.style.opacity = "1";
    imgElement.style.transform = "scale(1)";
  }, 200);
}

function nextImg(){
  index = (index + 1) % images.length;
  showImage();
}

function prevImg(){
  index = (index - 1 + images.length) % images.length;
  showImage();
}


const macbook = document.getElementById("macbook");

document.addEventListener("mousemove", (e)=>{

  const x =
    (window.innerWidth / 2 - e.pageX) / 30;

  const y =
    (window.innerHeight / 2 - e.pageY) / 30;

  macbook.style.transform =
    `
    rotateY(${-x}deg)
    rotateX(${y}deg)
    `;
});

const revealItems = document.querySelectorAll(
  '.reveal-left, .reveal-right, .reveal-up'
);

function revealOnScroll(){

  revealItems.forEach(item=>{

    const top = item.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      item.classList.add('reveal-active');
    }
  });
}

window.addEventListener('scroll',revealOnScroll);
revealOnScroll();


// subtle mouse tilt



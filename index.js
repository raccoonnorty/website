const btn = document.querySelector('.burger')
const navBtn = document.querySelectorAll('a.scroll-to')
const nav = document.querySelector('.navbar')

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    nav.classList.toggle('active')
})

for (let i of navBtn) {
    i.addEventListener('click', () => {
        btn.classList.toggle('active')
        nav.classList.toggle('active')
    })
}

// плавный скролл
const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//theme

const darkModeBtn = document.querySelectorAll('.greeting__theme')
let darkMode = localStorage.getItem('darkMode')

const enableDarkMode = () => {
  document.body.classList.toggle('dark')
  localStorage.setItem("darkMode", "enabled")
}

const disableDarkMode = () => {
  document.body.classList.toggle('dark')
  localStorage.setItem("darkMode", null)
}

if (darkMode === 'enabled') {
  enableDarkMode()
}

for (let dm of darkModeBtn) {
  dm.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
      enableDarkMode()
      console.log(darkMode)
    } else {
      disableDarkMode()
      console.log(darkMode)
    }
  })
}

// swiper

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
});
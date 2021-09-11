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
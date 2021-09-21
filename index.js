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

const darkMode = document.querySelectorAll('.greeting__theme')
// const body = document.querySelector('body')

for (let dm of darkMode) {
  dm.addEventListener('click', () => {
    // body.classList.toggle('dark')
    if (!document.body.getAttribute('id')) {
      setDarkTheme()  
    } else {
      setLightTheme()
    }
  })
}

let setDarkTheme = () => {
  document.body.setAttribute('id', 'dark')
  // document.body.classList.remove('light')
  localStorage.setItem("theme", "dark")
  // localStorage.clear()
}

let setLightTheme = () => {
  document.body.removeAttribute('id')
  // document.body.classList.add('light')
  localStorage.setItem("theme", "light")
  // localStorage.clear()
}

// let getTheme = () => {
//   let item = localStorage.getItem("theme")
//   if (item) {
//     return item
//   } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     return "dark"
//   } else {
//     return "light"
//   }
// }

// document.addEventListener('DOMContentLoader', () => {
//   let theme = getTheme()
  
//   if (theme === "light") {
//     setLightTheme()
//   }
// })

console.log(localStorage.getItem('theme'));

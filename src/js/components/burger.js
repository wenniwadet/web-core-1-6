export const overlay = document.querySelector('.overlay')
export const burgerMenu = document.querySelector('.burger__container')
const btnOpenBurgerMenu = document.querySelector('.header__button--burger')
const btnCloseBurgerMenu = burgerMenu.querySelector(
  '.burger-header__button--close'
)

function openBurgerMenu() {
  overlay.classList.add('overlay--active')
  burgerMenu.classList.add('burger__container--active')
}

function closeBurgerMenu() {
  burgerMenu.classList.remove('burger__container--active')
  overlay.classList.remove('overlay--active')
}

btnOpenBurgerMenu.addEventListener('click', openBurgerMenu)

btnCloseBurgerMenu.addEventListener('click', closeBurgerMenu)

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    closeBurgerMenu()
  }
})

document.addEventListener('click', function (evt) {
  if (evt.target === overlay) {
    closeBurgerMenu()
  }
})

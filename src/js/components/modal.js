import { burgerMenu } from './burger'
import { overlay } from './burger'

const modalFeedback = document.querySelector('.modal--feedback')
const modalCall = document.querySelector('.modal--call')
const btnsOpenModalFeedback = document.querySelectorAll(
  '[data-modal = "feedback"]'
)
const btnsOpenModalCall = document.querySelectorAll('[data-modal = "call"]')
const btnsCloseModal = document.querySelectorAll('.modal__button--close')

function openModal(modal, className) {
  if (burgerMenu.classList.contains('burger__container--active')) {
    burgerMenu.classList.remove('burger__container--active')
    overlay.classList.remove('overlay--active')
  }
  overlay.classList.add('overlay--active')
  modal.classList.add(className)
}

function closeModal() {
  overlay.classList.remove('overlay--active')
  modalFeedback.classList.remove('modal-feedback--active')
  modalCall.classList.remove('modal-call--active')
}

btnsOpenModalFeedback.forEach((btn) =>
  btn.addEventListener('click', function () {
    openModal(modalFeedback, 'modal-feedback--active')
  })
)

btnsOpenModalCall.forEach((btn) =>
  btn.addEventListener('click', function () {
    openModal(modalCall, 'modal-call--active')
  })
)

btnsCloseModal.forEach((btn) =>
  btn.addEventListener('click', function () {
    closeModal()
  })
)

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    closeModal()
  }
})

document.addEventListener('click', function (evt) {
  if (evt.target === overlay) {
    closeModal()
  }
})

function setHeight() {
  if (document.documentElement.clientWidth <= 425) {
    let height = window.innerHeight
    burgerMenu.style.height = height + 'px'
    modalFeedback.style.height = height + 'px'
    modalCall.style.height = height + 'px'
    overlay.style.height = height + 'px'
  }
}

window.addEventListener('resize', setHeight)

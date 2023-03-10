const buttonAboutSpoiler = document.querySelector('.about__spoiler')
const aboutDescription = document.querySelector('.about__container-description')
const buttonBrandsSpoiler = document.querySelector('.brands__spoiler')
const brandsList = document.querySelector('.brands__list')
const buttonRepairSpoiler = document.querySelector('.repair__spoiler')
const repairList = document.querySelector('.repair__list')

function showAll(button, container, className) {
  button.classList.toggle('spoiler--active')
  container.classList.toggle(className)
  if (button.classList.contains('spoiler--active')) {
    button.textContent = 'Скрыть'
  } else {
    button.textContent = 'Показать все'
  }
}

buttonAboutSpoiler.addEventListener('click', function () {
  showAll(
    buttonAboutSpoiler,
    aboutDescription,
    'about__container-description--show-all'
  )
})

buttonBrandsSpoiler.addEventListener('click', function () {
  showAll(buttonBrandsSpoiler, brandsList, 'brands__list--show-all')
})

buttonRepairSpoiler.addEventListener('click', function () {
  showAll(buttonRepairSpoiler, repairList, 'repair__list--show-all')
})

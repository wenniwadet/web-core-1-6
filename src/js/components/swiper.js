import Swiper, { Pagination } from 'swiper'

if (document.documentElement.clientWidth < 768) {
  const brandsSwiper = new Swiper('.swiper-brands', {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,

    pagination: {
      el: '.swiper-pagination-brands',
      bulletActiveClass: 'bullet--active',
      horizontalClass: 'bullet--gap'
    }
  })

  const repairSwiper = new Swiper('.swiper-repair', {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,

    pagination: {
      el: '.swiper-pagination-repair',
      bulletActiveClass: 'bullet--active',
      horizontalClass: 'bullet--gap'
    }
  })

  const priceSwiper = new Swiper('.swiper-price', {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,

    pagination: {
      el: '.swiper-pagination-price',
      bulletActiveClass: 'bullet--active',
      horizontalClass: 'bullet--gap'
    }
  })
}

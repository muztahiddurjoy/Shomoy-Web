const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    autoplay:{
        delay :4000
    },
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    }
  });
  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Touch Slider Using Html Css and Swiper.js|| 3d Responsive Slider 2|| Effect Coverflow|| update 2021</title>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" href="slider.css">
</head>
<body>
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="img/img1.jpeg" alt=""></div>
          <div class="swiper-slide"><img src="img/img2.jpeg" alt=""></div>
          <div class="swiper-slide"><img src="img/img3.jpeg" alt=""></div>
          <div class="swiper-slide"><img src="img/img4.jpeg" alt=""></div>
          <div class="swiper-slide"><img src="img/img5.jpeg" alt=""></div>
          <div class="swiper-slide"><img src="img/img6.jpeg" alt=""></div>
          <div class="swiper-slide"><img src="img/img7.jpeg" alt=""></div>
          <div class="swiper-slide"><img src="img/img8.jpeg" alt=""></div>
          <div class="swiper-slide"><img src="img/img9.jpeg" alt=""></div>
          <div class="swiper-slide"><img src="img/img10.jpeg" alt=""></div>
          <div class="swiper-slide"><img src="img/img11.jpeg" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
        var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows : true
  },
  loop: true,
  autoplay: {
          delay: 800,
          disableOnInteraction: false,
        },
});
    </script>
</body>
</html>
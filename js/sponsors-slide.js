const createSliderElements = () => {
  const slideTrack = $('<div class="__slide-track">');

  const images = loadImages();
  console.log(images);

  for(let i = 0; i < images.length; i++) {
    slideTrack.append($('<div class="__slide">').append($(`<img src="${images[i]}" height="100" width="250" alt="">`)));
  }

  const slider = $('<div class="__slider hide-scroll">');
  slideTrack.appendTo(slider);
  return slider;
}


const loadImages = () => {
  if($('title').html() == 'Twister Home Page') {
    workdir = "./";
  } else {
      workdir = "../";
  }

  return [
      'images/logo/gopro_logo.svg',
      'images/logo/state_farm_logo.svg',
      'images/logo/pro_fresh_cleaning.jpg',
      'images/logo/buffalo_wild_wings_logo.svg',
      'images/logo/culvers_logo.svg',
      'images/logo/raising_canes_logo.png',
      'images/logo/panera_bread_logo.png',
      'images/logo/darcy_motors_logo.png',
      'images/logo/gopro_logo.svg',
      'images/logo/state_farm_logo.svg',
      'images/logo/pro_fresh_cleaning.jpg',
      'images/logo/buffalo_wild_wings_logo.svg',
      'images/logo/culvers_logo.svg',
      'images/logo/raising_canes_logo.png',
      'images/logo/panera_bread_logo.png',
      'images/logo/darcy_motors_logo.png'
  ]
  .map(imageUrl => workdir + imageUrl);
};


$(document).ready(function() {
  $('footer').append(createSliderElements());
});
const createSliderElements = () => {
    const slideTrack = $('<div class="__slide-track">');

  const images = loadImages();
  console.log(images);

  for(let i = 0; i < images.length; i++) {
    slideTrack.append($('<div class="__slide">').append($(`<img src="${images[i]}" height="100" width="250" alt="">`)));
  }

  const footer = $('<footer>');
  const slider = $('<div class="__slider hide-scroll">');
  slideTrack.appendTo(slider);
  slider.appendTo(footer);
  footer.appendTo($('body'));
}


const loadImages = () => {
  let title = $('title').text();
  if(title == 'Twister Home Page') {
    return [
      'images/sponsors/carousel/gopro_logo.svg',
      'images/sponsors/carousel/state_farm_logo.svg',
      'images/sponsors/carousel/pro_fresh_cleaning.jpg',
      'images/sponsors/carousel/buffalo_wild_wings_logo.svg',
      'images/sponsors/carousel/culvers_logo.svg',
      'images/sponsors/carousel/raising_canes_logo.png',
      'images/sponsors/carousel/panera_bread_logo.png',
      'images/sponsors/carousel/darcy_motors_logo.png',
      'images/sponsors/carousel/gopro_logo.svg',
      'images/sponsors/carousel/state_farm_logo.svg',
      'images/sponsors/carousel/pro_fresh_cleaning.jpg',
      'images/sponsors/carousel/buffalo_wild_wings_logo.svg',
      'images/sponsors/carousel/culvers_logo.svg',
      'images/sponsors/carousel/raising_canes_logo.png',
      'images/sponsors/carousel/panera_bread_logo.png',
      'images/sponsors/carousel/darcy_motors_logo.png'
    ]
  }

  return [
      '../images/sponsors/carousel/gopro_logo.svg',
      '../images/sponsors/carousel/state_farm_logo.svg',
      '../images/sponsors/carousel/pro_fresh_cleaning.jpg',
      '../images/sponsors/carousel/buffalo_wild_wings_logo.svg',
      '../images/sponsors/carousel/culvers_logo.svg',
      '../images/sponsors/carousel/raising_canes_logo.png',
      '../images/sponsors/carousel/panera_bread_logo.png',
      '../images/sponsors/carousel/darcy_motors_logo.png',
      '../images/sponsors/carousel/gopro_logo.svg',
      '../images/sponsors/carousel/state_farm_logo.svg',
      '../images/sponsors/carousel/pro_fresh_cleaning.jpg',
      '../images/sponsors/carousel/buffalo_wild_wings_logo.svg',
      '../images/sponsors/carousel/culvers_logo.svg',
      '../images/sponsors/carousel/raising_canes_logo.png',
      '../images/sponsors/carousel/panera_bread_logo.png',
      '../images/sponsors/carousel/darcy_motors_logo.png'
  ]
};


$(document).ready(function() {
  $('<footer>').appendTo('body');
  createSliderElements()
});
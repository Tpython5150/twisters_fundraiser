let lastIndex = -1;

// $(document).on('customEvent', function(event, data) {

// });

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
      '../images/sponsors/carousel/darcy_motors_logo.png'
  ]
};

const newSlideItem = () => $('<div class="sponsors-slide-item"></div>');

const createSponsorsSlide = (images) => {
  let nSponsors = images.length;

  let sponsorsSlide = $('<div id="sponsors-slide" class="sponsors-slide hide-scroll"></div>')

  for(let i = 0; i < nSponsors; i++) {
      image = $(`<img src="${images[i]}" alt="..."></img>`);
      let slideItem = newSlideItem()

      slideItem.append(image);
      sponsorsSlide.append(slideItem);
  }

  sponsorsSlide.appendTo('footer');

  // $('#sponsors-slide').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", (event) => {
  //   console.log(event);
  //   console.log("Animation ended");
  // });

  const lastSlide = $('.sponsors-slide-item')[lastIndex].getBoundingClientRect()
  sponsorsSlide.animate({
    scrollLeft: lastSlide.left
  }, 5000)

  return sponsorsSlide;
}

const animateSlide = () => {
  const lastSlide = $('.sponsors-slide-item')[lastIndex].getBoundingClientRect()
  $('.sponsors-slide')[0].animate({
    scrollLeft: lastSlide.left
  }, 5000)
}

const config = {
  attributes: true,
  childList: false,
  subtree: true,
};

const callback = (mutationList, observer) => {
    for(const mutation of mutationList) {
      console.log(mutation);
    }
}


$(document).ready(function() {
  $('<footer id="footer">').appendTo('body');

  const observerNode = document.getElementById('footer');
  const observer = new MutationObserver(callback);
  observer.observe(observerNode, config);

  let images = loadImages();
  lastIndex = images.length - 1;
  let sponsorsSlide =  createSponsorsSlide(images);
  // observer.disconnect();
});

//builder an observer that listens for attributes changes
//fire a custom event that checks if bounds are reached
//if bounds are reacheds animate
//if hovered disabled pause animation
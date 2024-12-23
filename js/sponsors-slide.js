const goProSportsDomeAd = `<div class="go-pro-sports-dome layout">
      <div class="banner">
        <img src="../images/logo/go_pro_sports_domo_gp_logo.png">
      </div>
      <div class="row-1">
        <video autoplay="" loop="" muted="" playsinline="true" disablepictureinpicture="true">
          <source src="https://crossbar.s3.amazonaws.com/organizations/812/uploads/dome-video.webm">
        </video>
        <div class="row-1-group-1">
          <h1>GO PRO SPORTS DOME</h1>
          <p>LESSONS. RENTALS. GAMES.</p>
          <button>VISIT US</button>
          <div class="social-media">
            <a href="https://www.facebook.com/goproball" target="_blank"><img src="../images/icon/facebook.svg"></i></a> 
            <a href="https://twitter.com/gopro_ball" target="_blank"><img id="x" src="../images/icon/x.svg"></i></a>
            <a href="https://www.instagram.com/gopro_ball" target="_blank"><img src="../images/icon/instagram.svg"></i></a>
            <a href="https://www.youtube.com/@goprosportsacademy1826" target="_blank"><img src="../images/icon/youtube.png"></i></a>
          </div>
        </div>
      </div>
    </div>`;

const stateFarmAd = `<div class="state-farm layout">
    <div class="banner">
      <img src="../images/logo/state_farm_logo.svg">
    </div>
    <div class="row-1">
      <div class="row-1-col-1">
        <div class="profile-image">
          <!-- <img src="../images/sponsors/state_farm_agent_profile.jpg"> -->
        </div>
        <div class="caption-text">
          <h2>Maria Capetillo</h2>
          <p>State Farm Insurance Agent</p>
        </div>
      </div>
      <div class="row-1-col-2">
        <h2>Auto. Home. Condo. Renters. Personal Articles. Business. Life. Health. Pet.</h2>
        <h1>Call 815-407-0954</h1>
      </div>
    </div>
    <div class="row-2">
      <div class="social-media">
        <div class="icon-container">
          <img src="../images/icon/facebook.svg">
        </div>
        <div class="icon-container">
          <img src="../images/icon/instagram.svg">
        </div>
      </div>
    </div>
  </div>`;

class Sponsor {
  constructor(name, logo) {
    this.name = name;
    this.logo = logo;
  }
}

const createSliderElements = (workdir) => {
  const slideTrack = $('<div class="__slide-track">');

  const sponsors = loadSponsors();
  console.log(sponsors);

  for(let i = 0; i < sponsors.length; i++) {
    slideTrack.append($(`<div data-name="${sponsors[i].name}" class="__slide">`).append($(`<img src="${workdir + 'images/logo/' + sponsors[i].logo}" height="100" width="250" alt="">`)));
  }

  const slider = $('<div class="__slider hide-scroll">');
  slideTrack.appendTo(slider);
  return slider;
}


const loadSponsors = () => {
  return [
      new Sponsor('gopro', 'gopro_logo.svg'),
      new Sponsor('statefarm', 'state_farm_logo.svg'),
      new Sponsor('profresh', 'pro_fresh_cleaning.jpg'),
      new Sponsor('buffalowildwings', 'buffalo_wild_wings_logo.svg'),
      new Sponsor('culvers', 'culvers_logo.svg'),
      new Sponsor('raisingcanes', 'raising_canes_logo.png'),
      new Sponsor('panerabread', 'panera_bread_logo.png'),
      new Sponsor('darcymotors', 'darcy_motors_logo.png'),
      new Sponsor('gopro', 'gopro_logo.svg'),
      new Sponsor('statefarm', 'state_farm_logo.svg'),
      new Sponsor('profresh', 'pro_fresh_cleaning.jpg'),
      new Sponsor('buffalowildwings', 'buffalo_wild_wings_logo.svg'),
      new Sponsor('culvers', 'culvers_logo.svg'),
      new Sponsor('raisingcanes', 'raising_canes_logo.png'),
      new Sponsor('panerabread', 'panera_bread_logo.png'),
      new Sponsor('darcymotors', 'darcy_motors_logo.png'),
  ]
};


$(document).ready(function() {
  if($('title').html() == 'Twister Home Page') {
    workdir = "./";
  } else {
      workdir = "../";
  }

  $('footer').append(createSliderElements(workdir));


  $('.__slide').click(function() {
    console.log($(this).data('name'))

    if($('title').html() == 'Sponsors') {
      if($(this).data('name') == 'gopro') {
        $('main').html(goProSportsDomeAd);
      } else if($(this).data('name') == 'statefarm') {
        $('main').html(stateFarmAd);
      }
    } else {
      window.location.href = workdir + 'html/sponsors.html'
    }
  });

  if($('title').html() == 'Sponsors') {
    $('main').html(goProSportsDomeAd);
  }
});
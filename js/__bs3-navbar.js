const navBrandUrl = "images/logo/transparent_twisters_logo.png"
const homeRef = "index.html";
const meetTheCoachesRef = "html/meet_the_coaches.html";
const fundraiserRef = "html/fundraiser.html";
const sponsorsRef = "html/sponsors.html";

const homeLabel = "Home";
const meetTheCoachesLabel = "Meet The Coaches";
const fundraiserLabel = "Fundraiser";
const sponsorsLabel = "Sponsors";

const createNavBar = (title) => {
    let workdir = "./"
    if (title == 'Twister Home Page') {
        workdir = "./";
    } else {
        workdir = "../";
    }
    return `
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand text-center" href="#"><img src="${workdir + navBrandUrl}"/></a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav text-center mx-auto bg-dark">
            <li class="nav-item">
              <a id="home" class="nav-link" href="${workdir + homeRef}">${homeLabel}</a>
            </li>
            <li class="nav-item">
              <a id="coaches" class="nav-link" href="${workdir + meetTheCoachesRef}">${meetTheCoachesLabel}</a>
            </li>
            <li class="nav-item">
              <a id="fundraiser" class="nav-link" href="${workdir + fundraiserRef}">${fundraiserLabel}</a>
            </li>
            <li class="nav-item">
              <a id="sponsors" class="nav-link" href="${workdir + sponsorsRef}">${sponsorsLabel}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ` 
    };

    const activateLink = (title) => {
        $node = null;
        if(title == 'Twister Home Page') {
            $node = $('#home')

        } else if(title == 'Meet The Coaches') {
            $node = $('#coaches')

        } else if(title == 'Fundraiser') {
            $node = $('#fundraiser')

        } else if(title == 'Sponsors') {
            $node = $('#sponsors')

        }
        
        if($node) {
            $node.addClass('active');
            $node.attr('aria-current', 'page');
            $node.attr('href', '#');
        }
    }

    $(document).ready(function () {
        const title = $('title').html();
        $('header').html(createNavBar(title));
        activateLink(title);
    })
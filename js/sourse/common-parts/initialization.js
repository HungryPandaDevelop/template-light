let owlMain = $('.owl-main');

owlMain.owlCarousel({
  items: 1,
  nav: true,
  dots: false,
  margin: 30
});

let owlGallery = $('.market-owl');

owlGallery.owlCarousel({
  nav: true,
  dots: false,
  padding: 0,
  margin: 30,
  responsive:{
    0:{
      items:1
    },
    768:{
      items: 3,
    },
    992:{
      items: 4,
    }
  }
});





if($(window).width() < 786){
  let owlTablet = $('.owl-tablet');

  owlTablet.owlCarousel({
    dots: false,
    margin: 0,
    stagePadding: 45,
    responsive:{
      0:{
        items:1,
        margin: 15
      },
      576:{
        items: 2,
        margin: 15
      },
      786:{
        items: 4,
        margin: 15
      }
    }
  });
}

if($(window).width() < 576){
  let owlMobile = $('.owl-mobile');

  owlMobile.owlCarousel({
    dots: true,
    responsive:{
      0:{
        items:1,
        margin: 15
      },
      576:{
        items: 2,
        margin: 15
      }
    }
  });
}

if($(window).width() < 567){
  let owlBanners = $('.owl-banners');

  owlBanners.owlCarousel({
    dots: true,
    responsive:{
      0:{
        items:1,
        margin: 15

      }
    }
  });
}

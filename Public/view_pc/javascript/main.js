$(function(){
    $('.hamburger__menu').on('click', function(e){
        $(this).toggleClass('active');
        $(this).find('.menu').toggleClass('active');
    });

    // $.ajax({
    //     type: 'GET',
    //     url: 'data/main.json' 
    // }).done(function(data) {
    // for (var i = 0; i < 3; i++){
    //     var template = '<div class="col-md-4">';
    //         template += '<div class="card">';
    //         template +=	'<img class="card-img-top" src="'+data[i].img+'" alt="Card image cap">';
    //         template +=	'<div class="card-body">';
    //         template += '<h5 class="card-title">'+data[i].title+'</h5>';
    //         template += '<p class="card-text">'+data[i].text+'</p>';
    //         template += '<a href="#" class="btn btn-primary">Go somewhere</a>';
    //         template += '</div> </div> </div>';

    //     $('.load').append(template);
    // }	
    // });


    var swiper1 = new Swiper('.banner', {
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
      /*navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },*/
    });
    var swiper2 = new Swiper('.weeklyBest__right', {
        slidesPerView: 4,
/*        spaceBetween: 45,*/
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        pagination: {
            el: '.weeklyBest_num',
            type: 'fraction',
        },
      navigation: {
        nextEl: '.weeklyBest-next',
        prevEl: '.weeklyBest-prev',
      },
    });
    var swiper3 = new Swiper('.newArrivals__right', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        pagination: {
            el: '.newArrivals_num',
            type: 'fraction',
        },
      navigation: {
        nextEl: '.newArrivals-next',
        prevEl: '.newArrivals-prev',
      },
    });
    
    var swiper4 = new Swiper('.newBrand__con', {
        speed:800,
        loop: true,
      navigation: {
        nextEl: '.newBrand-btn__next',
        prevEl: '.newBrand-btn__prev',
      },
    });
    var swiper5 = new Swiper('.newBrand-subBanner__con', {
        speed:800,
        loop: true,
        direction: 'vertical',
      navigation: {
        nextEl: '.newBrand-btn__next',
        prevEl: '.newBrand-btn__prev',
      },
    });
    var swiper5 = new Swiper('.newBrand-text__con', {
        speed:800,
        loop: true,
        direction: 'vertical',
      navigation: {
        nextEl: '.newBrand-btn__next',
        prevEl: '.newBrand-btn__prev',
      },
    });
    
/*  var sBtn1 = $(".weeklyBest-next, .weeklyBest-prev");
  sBtn1.click(function(){   
   sBtn1.removeClass("active"); 
   $(this).addClass("active");
  });*/
  /*var sBtn2 = $(".newArrivals-next, .newArrivals-prev");
      sBtn2.click(function(){
       sBtn2.removeClass("active");
       $(this).addClass("active"); 
  });*/
    
    var heart = $(".product__heart");
      heart.click(function(){
       $(this).toggleClass("active"); 
  });
    
        
    $('.style__list').on({
            mouseenter:function(){
                var brs = $(this).siblings();
                if($(this).hasClass('on') == true){
                    $(this).addClass("on");
                }else{
                    $(this).addClass("on");
                    brs.removeClass('on')
                }
            },
            mouseleave:function() {
                var brs = $(this).siblings();
                if($(this).hasClass('on') == true){
                    $(this).addClass("on");
                }else{
                    $(this).addClass("on");
                    brs.removeClass('on')
                    
                }
            }
        })
        $('.style__list').eq(0).mouseenter();
    
/*    $('.style__list').on('mouseleave', function(){
        $(this).children('.item__wrap').css('opacity','0');
    });
    $('.style__list').on('mouseenter', function(){
        $(this).children('.item__wrap').css('opacity','1');
    });*/
    
});
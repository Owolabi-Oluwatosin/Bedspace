$(document).ready(function(){
  
  $('.for-slick-slider').slick({
      prevArrow: '.arrow-prev',
      nextArrow: '.arrow-next',
      dots: false,
      centerMode:false,
      centerPadding:'60px',
      infinite: true,
      speed: 300,
      arrows:true,
      autoPlay:true,
      autoplaySpeed:2000,
      responsive: [
        {
          breakpoint: 4850,
          settings: {
            slidesToShow: 7,
            centerMode:false,
            centerPadding:'60px',
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 3850,
          settings: {
            slidesToShow: 6,
            centerMode:false,
            centerPadding:'60px',
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            centerMode:false,
            centerPadding:'60px',
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1, 
            centerMode:false,
            centerPadding:'60px',
            dots: false,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            centerPadding:'60px',
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            centerPadding:'60px',
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
            centerPadding:'60px',
            dots: false,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
            centerPadding:'60px',
            dots: false,
          }
        }
      ]
    });

    $('.property-slider').slick({
      dots: false,
      centerMode:false,
      centerPadding:'20px',
      infinite: true,
      speed: 300,
      arrows:true,
      autoPlay:true,
      autoplaySpeed:2000,
      responsive: [
        {
          breakpoint: 4850,
          settings: {
            slidesToShow: 7,
            centerMode:false,
            centerPadding:'20px',
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 3850,
          settings: {
            slidesToShow: 6,
            centerMode:false,
            centerPadding:'20px',
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            centerMode:false,
            centerPadding:'20px',
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1, 
            centerMode:false,
            centerPadding:'20px',
            dots: false,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            centerPadding:'20px',
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            centerPadding:'20px',
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
            centerPadding:'20px',
            dots: false,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
            centerPadding:'20px',
            dots: false,
          }
        }
      ]
    });


    $('.trusted-party-img').slick({
      dots: false,
      infinite: true,
      speed: 300,
      arrows:true,
      autoPlay:true,
      autoplaySpeed:2000,
      responsive: [
        {
          breakpoint: 4850,
          settings: {
            slidesToShow: 7,
            centerMode:false,
            centerPadding:'60px',
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 3850,
          settings: {
            slidesToShow: 6,
            centerMode:false,
            centerPadding:'60px',
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoPlay:true,
            autoplaySpeed:2000,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            autoPlay:true,
            autoplaySpeed:2000,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            autoPlay:true,
            autoplaySpeed:2000,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            autoPlay:true,
            autoplaySpeed:1000,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoPlay:true,
            autoplaySpeed:1000,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoPlay:true,
            autoplaySpeed:500,
          }
        }
      ]
    });


    $('.estate-property-slider').slick({
      prevArrow: '#estate-arrow-prev',
      nextArrow: '#estate-arrow-next',
    });

    $('.property').slick({
      prevArrow: '#p-prev',
      nextArrow: '#p-next',
    });

    $('.property-img').slick({
      prevArrow: '#p-prev',
      nextArrow: '#p-next',
    });

    $('.property-desc-slider').slick({
      prevArrow: '#desc-prev',
      nextArrow: '#desc-next',
    });

    $(".collapse").on("shown.bs.collapse", function(){
      $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    }).on("hidden.bs.collapse", function(){
      $(this).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    });

    var dropzone = document.getElementById("dropzone");

    // var displayUpploads = function(data){
    //   var uploads = document.getElementById("uploads"),
    //       anchor,
    //       x;

    //       for(x=0; x < data.length; x++){
    //         anchor = document.createElement("a");
    //         anchor.href = data[x].file;
    //         anchor.innerText = data[x].name;

    //         uploads.appendChild(anchor);
    //       }
    // }

    // var upload = function(files){
    //   var formData = new FormData(),
    //       xhr = new XMLHttpRequest(),
    //       x;

    //     for(x=0; x < files.length; x++){
    //       formData.append("file[]", files[x]);
    //     }

    //     xhr = onload = function(){
    //       var data = JSON.parse(this.responseText);

    //       displayUpploads(data);
    //     }
    // };

    // dropzone.ondrop = function(e){
    //   e.preventDefault();
    //   this.className = "dropzone";
    //   upload(e.dataTransfer.files);
    // };

    dropzone.ondragover = function(){
      this.className = "dropzone dragover";
      return false;
    };

    dropzone.ondragleave = function(){
      this.className = "dropzone";
      return false;
    };

});	



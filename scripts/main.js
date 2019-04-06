$(document).ready(function(){
    var slider = $(".slider");
    var sliderBox = slider.find(".box");
    var sliderItems = sliderBox.find(".item");

    var numShowSlide = 0;
    
    var lengthItems = sliderItems.length;

    var bullet = $(".bullet");
    var bulletItems = bullet.find(".item");


    var widthSlider = slider.width();
    sliderItems.css('width', widthSlider + 'px');

    var widthSliderBox = 3 * widthSlider;
    var widthItems = sliderItems.width();
    
    $(this).find(sliderItems).each(function(index){
        var img_src = $(this).data('img');

        $(this).css('background-image','url(' + img_src + ')');

    });



    $(window).resize(function(){
        var widthWindow = $(window).width();
        var hideLine = $(".nav-btn-line2").css('display');

        widthSlider = widthWindow;
        slider.css('width', widthSlider + 'px');
        widthSliderBox = 3 * widthSlider;
        sliderBox.css('width', widthSliderBox + 'px');
        widthItems = widthSlider;
        sliderItems.each(function(){
            sliderItems.css('width', widthSlider + 'px');
        });
        
        sliderBox.css('left', - widthItems * numShowSlide + 'px');

        if( widthWindow >= 751 || hideLine == 'none' ){
            $(".header-nav").css('display','flex');
            
        }else{
            $(".header-nav").css('display','none');
        }
    
        console.log(widthSlider);
        console.log(widthSliderBox);
        console.log(widthItems);
        console.log("--------------");

    });

    


    $(".nav-btn").click(function(){
        var windowTop = $("body, html").scrollTop();
        var displayNav = $(".header-nav").css('display');    

        if( displayNav == 'none' ) {
            $(".header-nav").fadeIn(100);

            $(".header-nav").css('top', windowTop);

            $(".header-nav").animate({
                'left' : '0%' 
            }, 500); 


            $(".nav-btn-line2").css('display','none');
            $(".nav-btn-line1").css('transform','rotate(-45deg)');
            $(".nav-btn").css('top','30px');
            
            $(".nav-btn-line3").css('transform','rotate(45deg)');
            $(".nav-btn-line3").css('bottom','90%');

        }else{
            $(".header-nav").animate({
                'left' : '100%'
            }, 500);
            $(".header-nav").fadeOut(100);
        
            $(".nav-btn-line1").css('transform','rotate(0deg)');
            $(".nav-btn").css('top','15px');
            $(".nav-btn-line3").css('transform','rotate(0deg)');
            $(".nav-btn-line3").css('bottom','0');
            $(".nav-btn-line2").css('display','flex');
        }
    });


    bulletItems.eq(numShowSlide).css('border-style', 'solid');

    $(this).find(bulletItems).click(function(){
        var clickedEl = $(this);
        var indexEl = bulletItems.index(clickedEl);

        console.log(indexEl);

        bulletItems.eq(numShowSlide).css('border-style', 'none');
        numShowSlide = indexEl;
        sliderBox.animate({
            'left': - widthItems * numShowSlide + 'px'
        }, 500);

        bulletItems.eq(numShowSlide).css('border-style', 'solid');
    });


    

    $(".arrow.right").click(function(){

        if( numShowSlide != lengthItems - 1 ){
            bulletItems.eq(numShowSlide).css('border-style', 'none');
            numShowSlide ++;
            sliderBox.animate({
                'left': - widthItems * numShowSlide + 'px',
            }, 500);
            bulletItems.eq(numShowSlide).css('border-style', 'solid');
        }else{
            var firstSlide = sliderItems.eq(0).clone();
           

            bulletItems.eq(numShowSlide).css('border-style', 'none');
            sliderBox.css('width', sliderBox.width() + widthItems + 'px');        
            sliderBox.append(firstSlide);
           
            numShowSlide++;
            
            sliderBox.animate({
                'left': - widthItems * numShowSlide + 'px'
            }, 500, function(){
                sliderBox.css('left', 0);
                sliderBox.css('width', sliderBox.width() - widthItems + 'px');
                firstSlide.remove();

                numShowSlide = 0;
            });
            bulletItems.eq(0).css('border-style', 'solid'); 

        }

    });

    

    $(".arrow.left").click(function(){

        if( numShowSlide != 0 ){
            bulletItems.eq(numShowSlide).css('border-style', 'none');
            numShowSlide --;
            sliderBox.animate({
                'left': - widthItems * numShowSlide + 'px'
            }, 500);
            bulletItems.eq(numShowSlide).css('border-style', 'solid');
        }else{
            var lastSlide = sliderItems.eq(lengthItems - 1).clone();

            bulletItems.eq(numShowSlide).css('border-style', 'none');
            sliderBox.css('width', sliderBox.width() + widthItems + 'px');
            sliderBox.prepend(lastSlide);
            sliderBox.css('left', -widthItems + 'px');

            numShowSlide = 0;

            sliderBox.animate({
                'left': -widthItems * numShowSlide + 'px'
            }, 500, function(){
                sliderBox.css('left', - widthItems * (lengthItems - 1)  + 'px');
                sliderBox.css('width', sliderBox.width() - widthItems + 'px');
                lastSlide.remove();

                numShowSlide = lengthItems - 1;
            });
            bulletItems.eq(lengthItems - 1).css('border-style', 'solid');
        }

    });

    setInterval(function(){
        
        $(".arrow.right").click();

    }, 5000);


});
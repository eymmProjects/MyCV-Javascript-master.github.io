$(document).ready(function() {

var typed = new Typed(".typed",{
    strings: ["Java Developer.","Web Developer.","Graphic artist.","Student."],
    typeSpeed:70,
    loop:true,
    startDelay:1000,
    showCursor:false
});


$('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
});





var skillsTopOffset=$(".skillsSection").offset().top;
var statsTopOffset=$(".statsSection").offset().top;
var countUpFinished=false;

$(window).scroll(function(){

    if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){

        $('.chart').easyPieChart({
            // easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }

    if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200){
        $(".counter").each(function(){
            var element =$(this);
            var endVal = parseInt(element.text());
        
            element.countup(endVal);p
        });
        countUpFinished=true;

    }

});





});
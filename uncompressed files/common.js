$(document).ready(function(){
    $("#owl_first").owlCarousel();

    $("#owl_second").owlCarousel();

    //smooth scroll
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


    var data = {
        labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Maй', 'Июн', 'Июл', 'Авг', 'Сен', 'Oкт', 'Ноя', 'Дек'],
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
    };

    var options = {
        seriesBarDistance: 15
    };

    var responsiveOptions = [
        ['screen and (min-width: 641px) and (max-width: 1024px)', {
            seriesBarDistance: 10,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value;
                }
            }
        }],
        ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ];

    new Chartist.Bar('#chart1', data, options, responsiveOptions);



    var data = {
        labels: ['2012', '2013', '2014', '2015', '2016', '2017'],
        series: [
            [5, 4, 3, 7, 5, 10],
            [3, 2, 9, 5, 4, 6],
            [2, 1, -3, -4, -2, 0],
            [3, 2, 9, 5, 4, 6]
        ]
    };

    var options = {
        showPoint: true,
        lineSmooth: false,
        axisX: {
            showGrid: false,
            showLabel: true
        },
        axisY: {
            offset: 60,
            labelInterpolationFnc: function(value) {
                return '$' + value + 'm';
            }
        }
    };

    new Chartist.Line('#chart2', data, options);

});



$('#owl_first').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    slideSpeed: 500,
    autoplayHoverPause: true,
    autoplay:true,
    pagination : true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('#owl_second').owlCarousel({
    loop:true,
    margin: false,
    nav:false,
    slideSpeed: 500,
    autoplayHoverPause: true,
    autoplay:true,
    pagination : false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:5
        },
        1000:{
            items:6
        }
    }
});

//navbar script
(function() {

    // Definition of caller element
    var getTriggerElement = function(el) {
        var isCollapse = el.getAttribute('data-collapse');
        if (isCollapse !== null) {
            return el;
        } else {
            var isParentCollapse = el.parentNode.getAttribute('data-collapse');
            return (isParentCollapse !== null) ? el.parentNode : undefined;
        }
    };

    // A handler for click on toggle button
    var collapseClickHandler = function(event) {
        var triggerEl = getTriggerElement(event.target);
        // If trigger element does not exist
        if (triggerEl === undefined) {
            event.preventDefault();
            return false;
        }

        // If the target element exists
        var targetEl = document.querySelector(triggerEl.getAttribute('data-target'));
        if (targetEl) {
            triggerEl.classList.toggle('-active');
            targetEl.classList.toggle('-on');
        }
    };

    // Delegated event
    document.addEventListener('click', collapseClickHandler, false);

})(document, window);
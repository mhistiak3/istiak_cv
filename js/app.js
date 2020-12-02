
// Jquery ripples Plugin
$(document).ready(function(){
    $("#profile_ripple").ripples(
        {
            resolution:400
        }
    );  
});

// Animated progress bar
const bars = document.querySelectorAll(".progress_bar");

bars.forEach(function(bar) {

    let parcentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = parcentage + "%";
    bar.style.width = parcentage+ "%";
    
    
});

// Animated counter 
const counters = document.querySelectorAll(".counter");

function runCounter() {
    counters.forEach(counter =>{
        counter.innerText = 0;
        let target = +counter.dataset.count;
        let step = target / 100;
        
        let countIt = function () {
            let  displayedCount = +counter.innerText;
            if (displayedCount < target) {

                counter.innerText =Math.ceil(displayedCount + step);
               setTimeout(countIt,1)
            }
            else{
                counter.innerText = target;
            }
        }
        countIt()
    })
}


let counterSection = document.querySelector(".counter_wrapper");
let options ={
    rootMargin: '0px 0px -250px 0px'
}
const sectionObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
        runCounter();
        
    }
},options)
sectionObserver.observe(counterSection);


// Start Image Filter
$(".profolio_item").isotope({
    itemSelector:".item",
    layoutMode:"fitRows"
});
$(".profolio_menu ul li").click(function(){
    $(".profolio_menu ul li").removeClass("active")
    $(this).addClass("active")
    var selector = $(this).attr('date-filter');
    $(".profolio_item").isotope({
        filter:selector
    })
    return false
})

// Slick Slider
$(document).ready(function(){
    $(".slider").slick({
        arrows:false,
        autoplay:true
    })
})

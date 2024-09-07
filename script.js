$(document).ready(function() {
    var currentIndex = 0;
    var slideCount = $('.slides img').length;
    var slideWidth = $('.slides img').width();

    setInterval(function() {
        currentIndex++;
        if (currentIndex >= slideCount) 
        {
            currentIndex = 0;  
        }
        $('.slides').animate({ 'margin-left': -slideWidth * currentIndex }, 500);
    }, 2000);
});

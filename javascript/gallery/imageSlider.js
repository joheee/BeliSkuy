
let renderImageSlider = () => {

    $(function(){
        var $slider = $('.carousel')
        var $slideContainer = $('.carousel-image-container')
        var $slides = $('.carousel-image')
        
        var slideWidth = $slides.width()
        var slideHeight = $slides.height()
        
        var slideCount = $slides.length
        var totalWidth = slideCount * slideWidth
        
        console.log(slideWidth + ' ' + slideHeight)
        // FRAME
        $slider.css({
            width:slideWidth,
            height:slideHeight
        })
        
        // CONTAINER
        $slideContainer.css({
            width: totalWidth,
            marginLeft: - slideWidth
        })
        
        $('#left-arrow').on('click', function(){
            leftSlide()
        })
        
        $('#right-arrow').on('click', function(){
            rightSlide()
        })
        
        let leftSlide = () => {
            $slideContainer.animate({
                left: + slideWidth
            }, 'slow', () => {
                $('.carousel-image:last-child').prependTo('.carousel-image-container'),
                $('.carousel-image-container').css('left', '0')
            })
        }
        
        let rightSlide = () => {
            $slideContainer.animate({
                left: - slideWidth
            }, 'slow', () => {
                $('.carousel-image:first-child').appendTo('.carousel-image-container'),
                $('.carousel-image-container').css('left', '0')
            })
        }
        
        setInterval(rightSlide, 2500)
    })
}

export { renderImageSlider }
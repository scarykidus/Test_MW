$('.header__inlet').click(function() {
    $('.modals').fadeIn()
    $('body').addClass('modals__open')
})
$('.modals__close').click(function() {
    $('.modals').fadeOut()
    $('body').removeClass('modals__open')
})
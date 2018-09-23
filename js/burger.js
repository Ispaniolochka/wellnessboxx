var $button = $('#menu-btn');
// var $button = $('#menu-footer');

$button.on('click', function(e){
    e.preventDefault();
    if( $button.hasClass('open') ){
      $button.removeClass('open');
      $button.addClass('close');
    } else {
      $button.removeClass('close');
      $button.addClass('open');
    }
});
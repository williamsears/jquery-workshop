// Solution #1
// $('ul li img').on('click', function() {
//     var $img = $(this);
//     var imgSource = $img.attr('src');
//     var imgText = $img.attr('alt');
    
//     $('body').append('<div class="overlay"></div>');
//     $('.overlay').append('<img src="' + imgSource +'">');
//     $('.overlay').append('<p>' + imgText + '</p>');
    
//     $('.overlay').on('click', function() {
//         $('.overlay').remove();
//     })
// });

// Solution #2
var $overlay = $('<div class="overlay"></div>');
var $img = $('<img>');
var $p = $('<p>');
$overlay.append($img);
$overlay.append($p);
$('body').append($overlay);
$overlay.hide();

$overlay.on('click', function(evt) {
    if (evt.target === evt.currentTarget) {
        $overlay.fadeOut(100);
    }
});

$('ul li img').on('click', function() {
    var $currentImage = $(this);
    var imgSource = $currentImage.attr('src');
    var imgText = $currentImage.attr('alt');
    
    $img.attr('src', imgSource);
    $p.text(imgText);
    $overlay.fadeIn(100);
});
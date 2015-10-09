// Solution #1
// $('div.announcement').each(
//     function() {
//         var $currentAnnouncement = $(this);
        
//         var $button = $('<button>X</button>');
//         $currentAnnouncement.append($button);
        
//         $button.on('click', function() {
//             if ($button.text() === "X") {
//                 $currentAnnouncement.find('p').hide();
//                 $button.text("Show announcement");
//             }
//             else {
//                 $currentAnnouncement.find('p').show();
//                 $button.text("X");
//             }
//         });
//     }
// )

// Solution #2: CSS-based
$('div.announcement').append('<button></button>');

$('div.announcement button').on('click', function() {
    $(this).parent().toggleClass('hidden');
})
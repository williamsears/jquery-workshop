// Write your code here!
var $img = $('#iss-position');

function updateIssPosition() {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?').then(
        function(res) {
            var lat = res.iss_position.latitude;
            var lng = res.iss_position.longitude;

            var location = lat + ',' + lng;

            $img.attr('src', 'https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCFYgUuLsL7hhJEXH2FKSkbqlXb5DRUfmc&center=' + location + '&zoom=8&size=500x500&markers=' + location);
        }
    );
}

setInterval(updateIssPosition, 3000);
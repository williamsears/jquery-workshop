// Write your code here!
$.getJSON('http://api.open-notify.org/iss-now.json?callback=?').then(
    function(res) {
        var lat = res.iss_position.latitude;
        var lng = res.iss_position.longitude;
        
        // setTimeout here is just for show...
        setTimeout(function() {
            $('#iss-position').text('the ISS is at ' + lat + ', ' + lng);
        }, 2000);
        
    }
);
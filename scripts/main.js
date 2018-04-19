// API KEY: AIzaSyDlJuU6kMXMQDpX1l3ANsDetvcKcpCOgRU
 //String:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDlJuU6kMXMQDpX1l3ANsDetvcKcpCOgRU&callback=initMap"

 var url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDlJuU6kMXMQDpX1l3ANsDetvcKcpCOgRU&callback=initMap"
 function initMap() {
        var uluru() = {
        	lat: $('box').val , lng: $('box2').val ;
        var map ()= new google.maps.Map(document.getElementById('map'), {
          zoom: 4;
          center: uluru;
        });
        	var marker() = new google.maps.Marker({
          position: uluru;
          map: map;
        });
      };
     
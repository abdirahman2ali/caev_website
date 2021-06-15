//import axios from 'axios';
var map;
var lat;
var lng;
var locations = ['100 Wingarden Court, Scarborough ON', '300 Borough Drive, Scarborough ON', '52 Bluffers Park, Scarborough, ON'];
var dict = {'100 Wingarden Court, Scarborough ON' : [43.8113652,-79.2260385], '52 Bluffers Park, Scarborough, ON' : [43.7767555,-79.2590081]};
geocode(locations, dict);
var full = [
['100 Wingarden Court, Scarborough ON', 43.8113652,-79.2260385],
['52 Bluffers Park, Scarborough, ON', 43.7767555,-79.2590081]
];

	function loopdict(locations, dict){
		var i;
      	for (i=0;i<locations.length;i++){
      		console.log(locations[i]);
      		dict[locations[i]] = [1,2];
      		dict = geocode(locations, dict, i);

      	}
      	console.log(dict);
	}

      function geocode(locations, dict, n){
      	console.log(locations);
      	
      	var j;
      	console.log(dict);
        var location = locations[1];
        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
          params:{
            address:location,
            key:'AIzaSyAe35otILOD6b-WI7besHhnE4ibssuMDsk'
          }
        })
        .then(function(response){

          //log geocoder response
          console.log(response);
          //format
          lat = (response.data.results[0].geometry.location.lat);
          lng = (response.data.results[0].geometry.location.lng);
          dict[locations[n]] = [lat,lng];
          
          console.log(lat + " in func");
          return dict;
        })
      }
function initMap() {
  var myLatLng = { lat: 43.7932, lng: -79.244 };
  var ll2 = { lat: 43.74, lng: -79.19}
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng, //{ lat: 43.7532, lng: -79.244 },
    zoom: 12
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
  var marker1 = new google.maps.Marker({
    position: ll2,
    map: map,
    title: 'Hello World!'
  });

  
 
  var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(full[i][1], full[i][2]),
        map: map,
        title: full[i][0]
      });

      google.maps.event.addListener(marker, "onload", (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
  }

  var infowindow = new google.maps.InfoWindow();

	var request = {
          query: 'Scarborough Town Center',
          fields: ['name', 'geometry'],
        };

        service = new google.maps.places.PlacesService(map);

        service.findPlaceFromQuery(request, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }

            //.setCenter(results[0].geometry.location);
          }
        });
//geo = new Geocoder.geocode({"1600 Amphitheatre Parkway, Mountain View, CA" :address})
//console.log(geo);
//api key: AIzaSyAe35otILOD6b-WI7besHhnE4ibssuMDsk
/*
var ll3 = {lat: lat, lng: lng}
	for (var key in dict){
  console.log( key, dict[key] );
}
*/
/*
var marker2 = new google.maps.Marker({
    position: ll3,
    map: map,
    title: 'Hello World!'
  });
*/
}


//document.getElementById("map").innerHTML = "hello";

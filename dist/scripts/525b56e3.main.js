
var map;
function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(40.707621,-73.921831),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    zoomControl: false,
    panControl: false,
    streetViewControl: false,
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
  transitLayer = new google.maps.TransitLayer();
	transitLayer.setMap(map);

	var styles = [
  {
    stylers: [
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { color: "#dbf6f1" }, // "#ece7f7" },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "simplified" }
    ]
  },{
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      { color: "#FDFDFD" }
    ]
  },{
    featureType: "poi",
    elementType: "label",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      { visibility: "on" },
      { color: "#cdfbe1" }
    ]
  },{
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      { color: "#84e8d6" }
    ]
  },{
    featureType: "administrative.neighborhood",
    elementType: "labels.text.fill",
    stylers: [
      { visibility: "on" },
      { weight: 4 },
      { color: "#222241" }
    ]
  },

];

map.setOptions({styles: styles});

}

google.maps.event.addDomListener(window, 'load', initialize);



function initialize() {
  var hotelDuVin = { lat: 50.713036, lng: -1.989947 };
  var oldDoors = { lat: 50.713907, lng: -1.988278 };

  var mapOptions = {
    center: hotelDuVin,
    zoom: 15
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var marker = new google.maps.Marker({
      position: hotelDuVin,
      map: map,
      title:"Hotel du Vin!"
  });

  var marker = new google.maps.Marker({
      position: oldDoors,
      map: map,
      title:"Old Poole Doorways!"
  });

var styles = [
  {
    stylers: [
      { hue: "#06526b" },
      { lightness: -20 },
      { saturation: -50 }
    ]
  },{
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      { color: "#ffffff" }
    ]
  },{
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: -15 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      { lightness: -100 },
      { color: "#06526b" }
    ]
  }
];
map.setOptions({styles: styles});

}
google.maps.event.addDomListener(window, 'load', initialize);

//google map filter based on category
//developed by Traveltripper

// mapstyler
var mapstyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9d3d4"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#c9d3d4"
      }
    ]
  }
]; 


// category based map
var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
    content: ''
});

// Our markers
markers1 = [
  //hint ['serial id','title', lat,long, 'category','Marker label' ]
    ['0', 'Wine Country Inn & Cottages', 38.526180, -122.494766, 'hotel', ''],

    ['1', 'Archetype', 38.505528, -122.471073, 'sthelena', ''],
    ['2', 'Auberge du Soleil', 38.493758, -122.406059, 'sthelena', ''],
    ['3', 'Brasswood Bar + Kitchen', 38.528113, -122.501505, 'sthelena', ''],
    ['4', 'Cindy’s Backstreet Kitchen', 38.505264, -122.468862, 'sthelena', ''],
    ['5', 'Cook', 38.504851, -122.468848, 'sthelena', ''],
    ['6', 'The Culinary Institute of America at Greystone', 38.514824, -122.484730, 'sthelena', ''],
    ['7', 'Farmstead at Long Meadow Ranch', 38.501313, -122.463076, 'sthelena', ''],
    ['8', 'Goose and Gander', 38.503339, -122.468339, 'sthelena', ''],
    ['9', 'Market', 38.504926, -122.469840, 'sthelena', ''],
    ['10', 'Meadowood', 38.522858, -122.467436, 'sthelena', ''],
    ['11', 'Press ', 38.505450, -122.469021, 'sthelena', ''],
    ['12', 'Rutherford Grill  ', 38.459443, -122.422735, 'sthelena', ''],
    ['13', 'Gott’s Roadside ', 38.503129, -122.465681, 'sthelena', ''],
    ['14', 'Terra', 38.505501, -122.469031, 'sthelena', ''],

    ['15', 'All Seasons Bistro ', 38.578932, -122.578764, 'calistoga',''],
    ['16', 'Buster’s Southern Barbeque', 38.575471, -122.580960, 'calistoga',''],
    ['17', 'Calistoga Inn ', 38.577097, -122.579472, 'calistoga',''],
    ['18', 'Brannan’s Grill ', 38.578578, -122.578835, 'calistoga',''],
    ['19', 'Evangeline', 38.579218, -122.579686, 'calistoga',''],
    ['20', 'Sam’s Social Club', 38.582407, -122.575281, 'calistoga',''],
    ['21', 'Solbar ', 38.584296, -122.570884, 'calistoga',''],

    ['22', 'ad hoc', 38.399472, -122.358659, 'yountville',''],
    ['23', 'Bistro Jeanty', 38.401204, -122.359920, 'yountville',''],
    ['24', 'Bottega ', 38.401868, -122.362419, 'yountville',''],
    ['25', 'Bouchon', 38.402822, -122.362119, 'yountville',''],
    ['26', 'Brix', 38.415969, -122.385665, 'yountville',''],
    ['27', 'French Laundry', 38.404591, -122.365031, 'yountville',''],
    ['28', 'Hurley’s', 38.402436, -122.361249, 'yountville',''],
    ['29', 'Mustards', 38.419213, -122.388238, 'yountville',''],
    ['30', 'REDD Napa ', 38.399788, -122.358783, 'yountville','']

];

/**
 * Function to init map
 */

function initialize() {

        var lat = 38.526180;
        var lng = -122.494766;

       if(window.innerWidth > 992) {

            lat = 38.540409;
            lng = -122.207817;
        }
        
    var center = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        zoom: 11,
        center: center,
        styles: mapstyle,
        clickableIcons: false
    };
   
   if(document.getElementById('map-canvas')){
   	   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
   	   for (i = 0; i < markers1.length; i++) { 
   	   		addMarker(markers1[i]); 
   	       
   	   }
   	   filterMarkers('sthelena'); // to load default category markers , remove this function if want to load all  
 
   }
   

}

/**
 * Function to add marker to map
 */

function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1]; 
    var icon = '/assets/images/location_spot.png';
    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map,
        icon: (category =='hotel') ? '/assets/images/marker.png' : icon
    });

    gmarkers1.push(marker1);

    // Marker click listener
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () { 
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(this.getPosition());
            map.setZoom(15);
        };
    })(marker1, content));
}

/**
 * Function to filter markers by category
 */

filterMarkers = function (category) {
    for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0 || marker.category =='hotel') {
            marker.setVisible(true);
        }
        // Categories don't match 
        else {
            marker.setVisible(false);
        }
    }
};

// Init map
initialize();

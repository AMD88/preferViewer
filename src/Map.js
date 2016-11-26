import React,{Component} from 'react';
//import fetch from 'isomorphic-fetch';

class App extends Component{
    constructor() {
        super();
        this.initMap = this.initMap.bind(this);
    }
    initMap(script) {
        var map;
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3),
            mapTypeId: 'terrain'
        });

        // Create a <script> tag and set the USGS URL as the source.
//        var script = document.createElement('script');
//        // This example uses a local copy of the GeoJSON stored at
//        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
//        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
//        document.getElementsByTagName('head')[0].appendChild(script);

        var a = [0, 0, 67, 90, 7, 5, 69];
        for (var i = 0; i < 10; i = i + 2) {
            // var coords = results.features[i].geometry.coordinates;
            var latLng = new google.maps.LatLng(a[i], a[i + 1]);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map
            });
        }
        //document.body.appendChild(script);
    }


    loadMap() {


        const script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAMEYanwIaEqfx_X2vIYGGAnmHuqQupVzA&callback=initMap';


        document.body.appendChild(script);


    }



    render() {
        return (
            <div>
                {this.loadMap()}
            </div>
        );
    }
}

export default App;
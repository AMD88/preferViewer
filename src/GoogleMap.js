import React, {PropTypes, Component} from 'react';
import fetch from 'isomorphic-fetch';
//import polyfill from 'es6-promise';
//require('es6-promise').polyfill();

//import shouldPureComponentUpdate from 'react-pure-render/function';
var rows = [];
import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';


export default class SimpleMapPage extends Component {


    static defaultProps = {
        center: {lat: 35.685875, lng: -102.988831},
        zoom: 4,
        greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };

   // shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);

        this.dataFetch = this.dataFetch.bind(this);

        this.state = {
            statuses:{},
            coordinatesArray: [],

        };
    }


    componentDidMount(){
        this.dataFetch();
    }


    dataFetch(){
        // fetch('http://localhost:8080/search/tacos') .then(function(response) {
        //     if (response.status >= 400) {
        //         throw new Error("Bad response from server");
        //     }
        //     console.log(response.json());
        // });
        var results;
        const countResponse = fetch(`http://localhost:8080/search/restuarant`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then((res) => {
            const json = res.json();
            //console.log(json);
            return json;
        }).then(json => {
            this.setState(json);

            for(var i=0;i<100;i++) {

                if(json.statuses[i].coordinates) {
                   rows.push(<MyGreatPlace lat={json.statuses[i].coordinates.coordinates[0]} lng={json.statuses[i].coordinates.coordinates[1]} />);
                    //rows.push(<MyGreatPlace lat={66.160507} lng={-153.369141} />);
                    console.log(json.statuses[i].coordinates.coordinates);
                }
            }
            return json;
        });




       // console.log(countResponse);
      /*  var dataJason=JSON.stringify(data);
       console.log(typeof (dataJason));
       console.log(data.json());*/
    }
    b(){
        if(this.state.statuses[0]){
            console.log(this.state.statuses[0].coordinates.coordinates)

        }




    }
    render() {
        return (
            <GoogleMap
                apiKey={"AIzaSyAMEYanwIaEqfx_X2vIYGGAnmHuqQupVzA"}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}>
                {rows}

    </GoogleMap>


           /* <GoogleMap
                apiKey={"AIzaSyAMEYanwIaEqfx_X2vIYGGAnmHuqQupVzA"}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}>
                <MyGreatPlace lat={27.994402} lng={-81.760254} /!* Kreyser Avrora *!/ />
                <MyGreatPlace lat={61.955413} lng={36.337844} /!* Kreyser Avrora *!/ />
                <MyGreatPlace lat={100.955413} lng={33.337844} /!* Kreyser Avrora *!/ />
                <MyGreatPlace lat={39.876019} lng={-117.224121} /!* Kreyser Avrora *!/ />
                <MyGreatPlace lat={45.367584} lng={-68.972168} /!* Kreyser Avrora *!/ />
                <MyGreatPlace lat={44.182205} lng={-84.506836} /!* Kreyser Avrora *!/ />
                <MyGreatPlace lat={33.247875} lng={-83.441162} /!* Kreyser Avrora *!/ />
                <MyGreatPlace lat={44.182205} lng={-84.506836} /!* Kreyser Avrora *!/ />
                <MyGreatPlace lat={21.289373} lng={-157.917480} /!* Kreyser Avrora *!/ />
                <MyGreatPlace lat={66.160507} lng={-153.369141} /!* Kreyser Avrora *!/ />
                <MyGreatPlace lat={35.860119} lng={-86.660156} /!* Kreyser Avrora *!/ />

                <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /!* road circle *!/ />
            </GoogleMap>*/

        );


    }
}
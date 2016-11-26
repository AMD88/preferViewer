import React, {PropTypes, Component} from 'react';
//import shouldPureComponentUpdate from 'react-pure-render/function';

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
    }

    render() {
        return (
            <GoogleMap
                apiKey={"AIzaSyAMEYanwIaEqfx_X2vIYGGAnmHuqQupVzA"}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}>
                <MyGreatPlace lat={27.994402} lng={-81.760254} /* Kreyser Avrora */ />
                <MyGreatPlace lat={61.955413} lng={36.337844} /* Kreyser Avrora */ />
                <MyGreatPlace lat={100.955413} lng={33.337844} /* Kreyser Avrora */ />
                <MyGreatPlace lat={39.876019} lng={-117.224121} /* Kreyser Avrora */ />
                <MyGreatPlace lat={45.367584} lng={-68.972168} /* Kreyser Avrora */ />
                <MyGreatPlace lat={44.182205} lng={-84.506836} /* Kreyser Avrora */ />
                <MyGreatPlace lat={33.247875} lng={-83.441162} /* Kreyser Avrora */ />
                <MyGreatPlace lat={44.182205} lng={-84.506836} /* Kreyser Avrora */ />
                <MyGreatPlace lat={21.289373} lng={-157.917480} /* Kreyser Avrora */ />
                <MyGreatPlace lat={66.160507} lng={-153.369141} /* Kreyser Avrora */ />
                <MyGreatPlace lat={35.860119} lng={-86.660156} /* Kreyser Avrora */ />

                <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
            </GoogleMap>
        );
    }
}
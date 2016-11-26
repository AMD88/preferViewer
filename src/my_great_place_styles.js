const K_WIDTH = 10;
const K_HEIGHT = 10;
const MARKER_SIZE = 40;

const greatPlaceStyle = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,

    border: '1px solid purple',
    borderRadius: K_HEIGHT,
    backgroundColor: '#ffb3b3',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4
};

export {greatPlaceStyle};

function curSuccess(pos) {
    const coords = pos.coords;

    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err) {
    console.log(`Error: ${err.code} - ${err.message}`);
}

const options = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 5000, // Time to wait to stop trying for location
    maximumAge: 0, // Do not use cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, options);

function curSuccess(pos) {
    const coords = pos.coords;

    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err) {
    console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 5000, // Time to wait to stop trying for location
    maximumAge: 0, // Do not use cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);


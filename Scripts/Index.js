/**
 * Created by msth1401 on 03/11/14.
 */
$(document).ready(function(){
   if(core.isCompatibleBrowser())
   {
       core.locationWatchPermitted();
   }
   else
   {
       alert("The browser is not compatible!");
   }
});

var core = {
    locationWatcher: null,
    locationWatchPermitted: function () {

        this.locationWatcher = navigator.geolocation.watchPosition(this.locationFetchSuccess,this.locationFetchError,this.geolocationOptions);
    },
    isCompatibleBrowser: function () {

        return Modernizr.geolocation && Modernizr.cssanimations && Modernizr.csstransforms;
    },
    locationFetchSuccess: function (position) {

        var coordination = position.coords;

        var latitude = coordination.latitude;

        var longitude = coordination.longitude;

        document.getElementById("latitude").innerText = latitude.toString();

        document.getElementById("longitude").innerText = longitude.toString();
    },

    locationFetchError: function (error) {

        if(error.code == 1)
        {
            //User denied the access
            console.warn(error.message);
        }
        else if(error.code == 2)
        {
            //Location not available
            console.warn(error.message);
        }
        else if(error.code == 3)
        {
            //Request timeout
            console.warn(error.message);
        }
    },
    geolocationOptions: {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
    }
};
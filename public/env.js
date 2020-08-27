(function (window) {
    if (window) {
        window.__env = window.__env || {};

        window.__env.beUrl = `http://${window.location.hostname}:9001`;
        window.__env.feUrl = `http://${window.location.hostname}:9000`;
        window.__env.enableDebug = true;
        window.__env.refreshTokenTime = 5; //minutes
        window.__env.appArr = [
            {
                id: 6,
                name: `hoteluser`,
                nameAlt: `Booking`,
                display: false,
                feUrl: `${window.__env.feUrl}/booking`,
                bgImgUrl: "/vtlive.jpg"
            },
            {
                id: 7,
                name: `posuser`,
                nameAlt: `POS`,
                display: false,
                feUrl: `${window.__env.feUrl}/pos`,
                bgImgUrl: "/vtlive.jpg"
            }
        ];
    }
}(this));
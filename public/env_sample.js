(function (window) {
    if (window) {
        window.__env = window.__env || {};
        window.__env.beUrl = `http://localhost:9001`;
        window.__env.baseDomain = `http://localhost:9000`;
        window.__env.enableDebug = false;
        window.__env.refreshTokenTime = 5; //minutes
        window.__env.appArr = [
            {
                id: 6,
                name: `hoteluser`,
                nameAlt: `Booking`,
                display: false,
                subDomain:"frontend_booking",
                feUrl: '',
                bgImgUrl: "/booking.png"
            },
            {
                id: 7,
                name: `posuser`,
                nameAlt: `POS`,
                display: false,
                subDomain:"frontend_pos",
                feUrl: '',
                bgImgUrl: "/pos.png"
            }
        ];
    }
}(this));
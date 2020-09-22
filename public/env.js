(function (window) {
    if (window) {
        window.__env = window.__env || {};
        window.__env.beUrl = `http://localhost/user-authentication`;
        window.__env.baseDomain = `http://localhost`;
        window.__env.enableDebug = true;
        window.__env.refreshTokenTime = 5; //minutes
        window.__env.appArr = [
            {
                id: 1,
                name: `Admin`,
                nameAlt: `User Administration`,
                display: false,
                subDomain:"user-administration",
                feUrl: '',
                bgImgUrl: "/pos.png"
            },            
            {
                id: 2,
                name: `booking`,
                nameAlt: `Booking`,
                display: false,
                subDomain:"booking",
                feUrl: '',
                bgImgUrl: "/booking.png"
            },
            {
                id: 3,
                name: `pos`,
                nameAlt: `POS`,
                display: false,
                subDomain:"pos",
                feUrl: '',
                bgImgUrl: "/pos.png"
            }

        ];
    }
}(this));
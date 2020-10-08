(function (window) {
    if (window) {
        window.__env = window.__env || {};
        window.__env.beUrl = `http://localhost/backend-admin`;
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
                bgImgUrl: "/admin.png"
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
            },
            {
                id: 4,
                name: `inventory`,
                nameAlt: `INVENTORY`,
                display: false,
                subDomain:"inventory",
                feUrl: '',
                bgImgUrl: "/inventory.png"
            },
            {
                id: 5,
                name: `equipment`,
                nameAlt: `EQUIPMENT`,
                display: false,
                subDomain:"equipment",
                feUrl: '',
                bgImgUrl: "/equipment.png"
            },
            {
                id: 6,
                name: `hrm`,
                nameAlt: `HRM`,
                display: false,
                subDomain:"hrm",
                feUrl: '',
                bgImgUrl: "/hrm.png"
            },
            {
                id: 7,
                name: `payroll`,
                nameAlt: `PAYROLL`,
                display: false,
                subDomain:"payroll",
                feUrl: '',
                bgImgUrl: "/payroll.png"
            },
            {
                id: 8,
                name: `timesheet`,
                nameAlt: `TIMESHEET`,
                display: false,
                subDomain:"timesheet",
                feUrl: '',
                bgImgUrl: "/timesheet.png"
            },
            {
                id: 9,
                name: `crm`,
                nameAlt: `CRM`,
                display: false,
                subDomain:"crm",
                feUrl: '',
                bgImgUrl: "/crm.png"
            },
            {
                id: 10,
                name: `order`,
                nameAlt: `ORDER`,
                display: false,
                subDomain:"order",
                feUrl: '',
                bgImgUrl: "/order.png"
            },
            {
                id: 11,
                name: `vendor`,
                nameAlt: `VENDOR`,
                display: false,
                subDomain:"vendor",
                feUrl: '',
                bgImgUrl: "/vendor.png"
            },
            {
                id: 12,
                name: `finance`,
                nameAlt: `FINANCE`,
                display: false,
                subDomain:"finance",
                feUrl: '',
                bgImgUrl: "/finance.png"
            }
        ];
    }
}(this));
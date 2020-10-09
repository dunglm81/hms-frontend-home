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
                nameAlt: `Quản lý người dùng`,
                display: false,
                subDomain:"admin",
                feUrl: '',
                iconName: "user-shield"
            },            
            {
                id: 2,
                name: `booking`,
                nameAlt: `Đặt phòng`,
                display: false,
                subDomain:"booking",
                feUrl: '',
                iconName: "hotel"
            },
            {
                id: 3,
                name: `pos`,
                nameAlt: `POS`,
                display: false,
                subDomain:"pos",
                feUrl: '',
                iconName: "laptop"
            },
            {
                id: 4,
                name: `inventory`,
                nameAlt: `INVENTORY`,
                display: false,
                subDomain:"inventory",
                feUrl: '',
                iconName: "warehouse"
            },
            {
                id: 5,
                name: `equipment`,
                nameAlt: `EQUIPMENT`,
                display: false,
                subDomain:"equipment",
                feUrl: '',
                iconName: "tools"
            },
            {
                id: 6,
                name: `hrm`,
                nameAlt: `HRM`,
                display: false,
                subDomain:"hrm",
                feUrl: '',
                iconName: "user-cog"
            },
            {
                id: 7,
                name: `payroll`,
                nameAlt: `PAYROLL`,
                display: false,
                subDomain:"payroll",
                feUrl: '',
                iconName: "address-book"
            },
            {
                id: 8,
                name: `timesheet`,
                nameAlt: `TIMESHEET`,
                display: false,
                subDomain:"timesheet",
                feUrl: '',
                iconName: "calendar-alt"
            },
            {
                id: 9,
                name: `crm`,
                nameAlt: `CRM`,
                display: false,
                subDomain:"crm",
                feUrl: '',
                iconName: "user-tag"
            },
            {
                id: 10,
                name: `order`,
                nameAlt: `ORDER`,
                display: false,
                subDomain:"order",
                feUrl: '',
                iconName: "people-carry"
            },
            {
                id: 11,
                name: `vendor`,
                nameAlt: `VENDOR`,
                display: false,
                subDomain:"vendor",
                feUrl: '',
                iconName: "user-tie"
            },
            {
                id: 12,
                name: `finance`,
                nameAlt: `FINANCE`,
                display: false,
                subDomain:"finance",
                feUrl: '',
                iconName: "hand-holding-usd"
            }
        ];
    }
}(this));
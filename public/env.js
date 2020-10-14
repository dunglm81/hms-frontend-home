(function (window) {
    if (window) {
        window.__env = window.__env || {};
        window.__env.beUrl = `http://localhost/backend-admin`;
        window.__env.baseDomain = `http://localhost`;
        window.__env.enableDebug = true;
        window.__env.ourLogo = `/vmt.png`;
        window.__env.dataConnectionLogo = `/data_connection.png`;
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
                nameAlt: `Quản lý bán lẻ`,
                display: false,
                subDomain:"pos",
                feUrl: '',
                iconName: "laptop"
            },
            {
                id: 4,
                name: `inventory`,
                nameAlt: `Quản lý hàng tồn`,
                display: false,
                subDomain:"inventory",
                feUrl: '',
                iconName: "warehouse"
            },
            {
                id: 5,
                name: `equipment`,
                nameAlt: `Quản lý thiết bị`,
                display: false,
                subDomain:"equipment",
                feUrl: '',
                iconName: "tools"
            },
            {
                id: 6,
                name: `hrm`,
                nameAlt: `Quản lý nhân sự`,
                display: false,
                subDomain:"hrm",
                feUrl: '',
                iconName: "user-cog"
            },
            {
                id: 7,
                name: `payroll`,
                nameAlt: `Quản lý lương`,
                display: false,
                subDomain:"payroll",
                feUrl: '',
                iconName: "address-book"
            },
            {
                id: 8,
                name: `timesheet`,
                nameAlt: `Quản lý chấm công`,
                display: false,
                subDomain:"timesheet",
                feUrl: '',
                iconName: "calendar-alt"
            },
            {
                id: 9,
                name: `crm`,
                nameAlt: `Quản lý khách hàng`,
                display: false,
                subDomain:"crm",
                feUrl: '',
                iconName: "user-tag"
            },
            {
                id: 10,
                name: `order`,
                nameAlt: `Quản lý đơn hàng`,
                display: false,
                subDomain:"order",
                feUrl: '',
                iconName: "people-carry"
            },
            {
                id: 11,
                name: `vendor`,
                nameAlt: `Quản lý bán hàng`,
                display: false,
                subDomain:"vendor",
                feUrl: '',
                iconName: "user-tie"
            },
            {
                id: 12,
                name: `finance`,
                nameAlt: `Quản lý tài chính`,
                display: false,
                subDomain:"finance",
                feUrl: '',
                iconName: "hand-holding-usd"
            }
        ];
    }
}(this));
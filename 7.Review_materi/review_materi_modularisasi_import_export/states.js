const vtuberList = [
    {
        id: 1,
        vtuberName: "Fiona Cookies and Cream CH (フィオーナー・クキズ・アンド・クリーム CH)",
        isActive: true,
    },
    {
        id: 2,
        vtuberName: "Marzya Chocomint CH (マージャ・チョッコー・ミント CH)",
        isActive: true,
    },
    {
        id: 3,
        vtuberName: "Benny Cheese CH (ベニー・チーズ CH)",
        isActive: true,
    },
    {
        id: 4,
        vtuberName: "Jeremy Croissant CH (ジェレミー・クァーサーント CH)",
        isActive: true,
    },
    {
        id: 5,
        vtuberName: "Laura Strawberry CH (ローラー・ストローブレ CH)",
        isActive: true,
    },
    {
        id: 6,
        vtuberName: "Levitia Blueberry CH レビティア・ブルーベリー CH)",
        isActive: true,
    },
    {
        id: 7,
        vtuberName: "Conny Lemon CH (コニー・レモン CH)",
        isActive: true,
    },
    {
        id: 8,
        vtuberName: "Kevin Coffee CH (ケビン・コフィー CH)",
        isActive: false,
    }
];

    
const getGuest = [
    {
        id: 1,
        username: "Fransiskus Benedictus Gawi Rebong",
        email: "fransiskusbenedictusgawirebong@gmail.com",
    },
    {
        id: 2,
        username: "Vito Christian",
        email: "vitochristian@gmail.com",
    },
    {
        id:3,
        username: "Theresia Gayuh Suminar",
        email: "theresiagayuh@gmail.com",
    }
];

const CryptoJS = require("crypto-js");


const roomConnectionToken = [
    {
        id: 1,
        time: "02/05/2025 09.00 AM (GMT+7 JKT/BNK/HNO)",
        guest: getGuest[1].username,
        vtuber1: vtuberList[0].vtuberName,
        vtuber2: vtuberList[1].vtuberName,
        token: "room#1"
    },
    {
        id: 2,
        time: "02/05/2025 01.00 PM (GMT+7 JKT/BNK/HNO)",
        guest: getGuest[0].username,
        vtuber1: vtuberList[2].vtuberName,
        vtuber2: vtuberList[3].vtuberName,
        token: "room#2"
    },
    {
        id: 3,
        time: "02/05/2025 04.00 PM (GMT+7 JKT/BNK/HNO)",
        guest: getGuest[0].username,
        vtuber1: vtuberList[4].vtuberName,
        vtuber2: vtuberList[5].vtuberName,
        token: "room#3"
    },
    {
        id: 4,
        time: "02/05/2025 07.00 PM (GMT+7 JKT/BNK/HNO)",
        guest: getGuest[1].username,
        vtuber1: vtuberList[6].vtuberName,
        vtuber2: vtuberList[7].vtuberName,
        token: "room#4"
    },
    {
        id: 5,
        time: "02/05/2025 10.00 PM (GMT+7 JKT/BNK/HNO)",
        guest: getGuest[2].username,
        vtuber1: vtuberList[0].vtuberName,
        vtuber2: vtuberList[4].vtuberName,
        token: "room#5"
    },
    {
        id: 6,
        time: "03/05/2025 09.00 AM (GMT+7 JKT/BNK/HNO)",
        guest: getGuest[2].username,
        vtuber1: vtuberList[1].vtuberName,
        vtuber2: vtuberList[2].vtuberName,
        token: "room#6"
    }
];

const hashedArray = [];

let listVtuber;
let tokens;

console.log(module)

module.exports = {
    vtuberList,
    getGuest,
    CryptoJS,
    roomConnectionToken,
    hashedArray,
    listVtuber,
    tokens,
};
const vtuberList = {
    Vtuber1: "Fiona Cookies and Cream CH (フィオーナー・クキズ・アンド・クリーム CH)",
    vtuber2: "Marzya Chocomint CH (マージャ・チョッコー・ミント CH)",
    vtuber3: "Benny Cheese CH (ベニー・チーズ CH)",
    vtuber4: "Jeremy Croissant CH (ジェレミー・クァーサーント CH)",
    vtuber5: "Laura Strawberry CH (ローラー・ストローブレ CH)",
    vtuber6: "Levitia Blueberry CH レビティア・ブルーベリー CH)",
    vtuber7: "Conny Lemon CH (コニー・レモン CH)",
    vtuber8: "Kevin Coffee CH (ケビン・コフィー CH)",
}

const roomConnectionToken = {
    room1: 0,
    room2: 0,
}

const isServerActive = true;
const isVtuberActive = true;

function specialRoomConnection(requestVtuber, roomConnectionToken, isServerReady = false) {
    if (!isServerActive) {
        console.log(`Server is under maintenance, sorry for this inconvenience`);
        return;
    }

    if (!(typeof vtuberList == 'object')) {
        console.log(``)
    }
}
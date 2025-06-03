let { vtuberList, getGuest, CryptoJS, roomConnectionToken, hashedArray, listVtuber, tokens } = require('./states');




function specialRoomConnection(requestVtuber, roomToken) {

    for (let i = 0; i < requestVtuber.length; i++) {
        listVtuber = requestVtuber[i];

        if (listVtuber.isActive === true) {
            console.log(`${listVtuber.vtuberName} is ready for room connection`);
        } else {
            console.log(`Sorry, this vtuber is not ready for room connection`);
        }
        
    }


    for (let i = 0; i < roomToken.length; i++) {
        tokens = roomToken[i];

        const hashedTokens = CryptoJS.SHA256(tokens.token).toString(CryptoJS.enc.Hex);
        tokens.token = hashedTokens;

        console.log(tokens);
        console.log(`This information is provided by TRISTAR Tekno Mulia Sakti IT Solution \u00A9 2025 TRISTAR Digital Interactive Media`)
    }

    if (listVtuber.isActive === true && tokens.token === tokens) {
        console.log(`Room Connection is already booked!`)
    }


    



    




    

    



}

specialRoomConnection(vtuberList, roomConnectionToken);
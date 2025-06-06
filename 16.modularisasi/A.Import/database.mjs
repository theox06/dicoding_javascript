export default function getFunction(realNameCode, vtuberCode) {
    // let name;
    let realNameCode;
    let getRealName;
    let vtuberCode;
    let getVtuberName;
    const agency = "Keluarga Vtuber Agency";
    const genderCode = "F";
    let getGender;
    const age = 18;
    const joinDate = "01-05-2025";
    const isActive = true;

    if (genderCode === "F") {
        getGender = "Female";
    } else if (genderCode === "M") {
        getGender = "Male";
    } else {
        console.log(`Not Found (404)`);
    }

    switch (realNameCode) {
        case 0:
            getRealName = "Fiona Calysta";
            break;

        case 1:
            getRealName = "Marzya Luis";
            break;

        case 2: 
            getRealName = "Yosafat Benny Herlambang";
            break;

        case 3:
            getRealName = "Jeremy Miracle";
            break;

        case 4:
            getRealName = "Laura Angelika Tandiombo";
            break;

        case 5:
            getRealName = "Levitia Rajani";
            break;

        case 6:
            getRealName = "Kevin Philbert";
            break;

        default:
            console.log('Not Found (404)');
            break;
    }

    switch (vtuberCode) {
        case 0:
            getVtuberName = "Fiona Cookies and Cream CH";
            break;

        case 1:
            getVtuberName = "Marzya Choco Mint CH";
            break;
    
        case 2:
            getVtuberName = "Benny Cheese Cake CH";
            break;

        case 3:
            getVtuberName = "Jeremy Croissant CH";
            break;

        case 4:
            getVtuberName = "Laura Strawberry CH";
            break;

        case 5:
            getVtuberName = "Levitia Blueberry CH";
            break;

        case 6:
            getVtuberName = "Kevin Red Pepper CH";
            break;

        default:
            console.log(`Not Found (404)`);
            break;
    }

    console.log(`
        Name : ${getVtuberName}
        Original Name : ${getRealName}
        Gender : ${getGender}
        Age : ${age}
        Join Date : ${joinDate}
        Active Status : ${isActive}
        Agency : ${agency}
        `);
}
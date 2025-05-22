export default function getFromDb() {
    const name = "Fiona Cookies and Cream CH";
    const originalName = "Fiona Calysta";
    let gender = "F";
    let displayGender;
    const isActive = true;
    const isVerified = true;
    const joinDate = 19102025;
    const agency = "Keluarga Cemara Agency";

    if (gender === "F") {
        displayGender = "Female"
    } else if (gender === "M") {
        displayGender = "Male"
    } else {
        throw new Error(`Unknown Gender`);
    }

    console.log(`
        Details from the vtubers
        Name : ${name}
        Original Name : ${originalName}
        Gender : ${displayGender}
        Active Status : ${isActive}
        Verification Status : ${isVerified}
        Join Date : ${joinDate}
        Agency : ${agency}
        This information is provided by TRISTAR InfoKom MediaKom. (c) 2025 All Rights Reserved to Keluarga Cemara Agency
        `);
}


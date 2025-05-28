

export function getGender(genderCode) {
    if (genderCode === "F") {
        return 'Female';
    } else if (genderCode === "M") {
        return 'Male';
    } else {
        console.log(`Not Found (404)`);
    }
}

export function getVtuberName(vtuberCode) {
    if (vtuberCode === 0) {
        return 'Fiona Cookies and Cream CH (フィオーナー・クキズ・アンド・クリーム CH)';
    } else if (vtuberCode === 1) {
        return 'Marzya Choco Mint CH (マージャ・チョッコー・ミント CH)';
    } else if (vtuberCode === 2) {
        return 'Benny Cheesecake CH (ベニー・チーズケーク CH)';
    } else if (vtuberCode === 3) {
        return 'Jeremy Croissant CH (ジェレミー・クァーサーント CH)';
    } else if (vtuberCode === 4) {
        return 'Laura Strawberry CH (ローラー・ストローブレ CH)';
    } else if (vtuberCode === 5) {
        return 'Levitia Blueberry CH レビティア・ブルーベリー CH)';
    } else if (vtuberCode === 6) {
        return 'Conny Lemon CH (コニー・レモン CH)';
    } else if (vtuberCode === 7) {
        return 'Kevin Coffee CH (ケビン・コフィー CH)'
    }
}

export function isVerified(verifiedStatus) {
    if (verifiedStatus == true) {
        return 'Verified';
    } else {
        return 'Not Verified';
    }
}
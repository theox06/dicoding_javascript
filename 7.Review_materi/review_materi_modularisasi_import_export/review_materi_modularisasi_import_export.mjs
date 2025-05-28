import { getRealName, getGender, getVtuberName, isVerified } from './get.mjs';

const realName = getRealName(1);
const gender = getGender('F');
const vtuberName = getVtuberName(1);
const verifiedStatus = isVerified(1);

for (let i = 0; i < realName.length; i++) {
    const fetchRealName = realName[i];
    console.log(`
        Name : ${realName}
        Gender : ${gender}
        Vtuber Name : ${vtuberName}
        \u00A9 2025 TRISTAR DIGITAL MEDIA GROUP`);
}

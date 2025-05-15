const user1 = {
    uuid : '26f1ac18-3c98-4d4d-974b-524830331f43',
    fullName : 'Jeconia Callysta Setio Halim',
    nickname : 'Conny',
    username : 'jeconiaxiiipssmasmawaci1120', 
    grade : 'XII (IPS/Social)',
    grade_code : 4,
    born_date : 23082008,
    email : 'jeconia1120@belajar.id',
    level : 'student',
    address : 'eff697c636a728cc816d1ac85c136d3747902fad',
    phone : '95d64788096f0a7f9a4c47324f253954ead40f48',
    cardBalance : 45000,
};

const user2 = {
    uuid : '3de61a08-d117-41cd-a147-6e3f6ec998ff',
    fullName : 'Fransiskus Benedictus Gawi Rebong',
    nickname : 'Bebe',
    username : 'fransiskusgawirebongxiiipssmasmawaci1121',
    grade : 'XII (IPS/Social)',
    grade_code : 4,
    born_date : 23082007,
    email : 'benedictus1121@belajar.id',
    level : 'student',
    address : 'eff697c636a728cc816d1ac85c136d3747902fad',
    phone : '95d64788096f0a7f9a4c47324f253954ead40f48',
    cardBalance : 45000,
};

user1.cardBalance = 50000;
user2.cardBalance = 60000;

delete user2['nickname'];
console.log(user2)

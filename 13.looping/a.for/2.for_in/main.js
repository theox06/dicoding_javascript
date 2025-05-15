const student = {studentName : 'Fransiskus Benedictus Gawi Rebong', grade : 'XII', subject : 'IPS/Sosial', classYearStart : 2022, classYearEnd : '2025'};

for (const property in student) {
    console.log(`${property} bernilai ${student[property]}`);
}
const livestreamMethod = ['Internet', 'DVB-T2 (Terrestrial FTA)', 'DVB-S2 (Satelllite FTA)', 'DVB-S2 (Satellite Paid)'];
const livestreamVideoMode = ['SD', 'HD', 'FHD', 'QHD'];
const livestreamDrm = ['Playready', 'Widevine'];

// menggunakan delete (menghapus berdasarkan data index yang dipilih saja)
// delete livestreamMethod[3];

// menggunakan splice (menghapus berdasarkan index dan jumlah data array)
// livestreamMethod.splice(1,3);

// menggunakan shift dan pop (shift menghapus element pertama nya saja, pop menghapus element terakhir saja)
// livestreamMethod.shift();
// livestreamMethod.pop();
const [q3, q2, q1, q0] = livestreamVideoMode
console.log(q0);

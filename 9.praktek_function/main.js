function hello(name, origin = "Bandung") {
    if (name == "Rahmat" && origin == "Semarang") {
        console.log(`Halo! Nama saya ${name}. Saya tinggal di ${origin}`);
    } else if (name == "Indra") {
        console.log(`Halo! Nama saya ${name}. Saya tinggal di ${origin}`);
    } else {
        console.log(`Data tidak ditemukan!`)
    }
}
    

let rahmat = hello("Rahmat", "Semarang");
let Indra = hello("Indra");
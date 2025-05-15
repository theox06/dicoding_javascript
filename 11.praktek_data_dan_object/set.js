// menstrukturkan data dengan set

// menggunakan constructor
const set = new Set();
const valueSet = new Set([1, 2, 3]);

// menggunakan add
const cpuPresetMode = new Set();
cpuPresetMode.add(1);
cpuPresetMode.add(2);

// mengakses nilai di set

// menggunakna keyword for
const powerPresetMode = new Set();
powerPresetMode.add(1, 'Power Saving');
powerPresetMode.add(2, 'Balance');
powerPresetMode.add(3, 'Performance Mode');

for (const number of powerPresetMode) {
    console.log(number);
}

// menggunakan foreach
cpuPresetMode.forEach((value) => console.log(value));

const gpuPowerPreset = new Set();
gpuPowerPreset.add(1);
gpuPowerPreset.add(2);
// menghapus nilai di set
gpuPowerPreset.delete(1);
console.log(gpuPowerPreset)
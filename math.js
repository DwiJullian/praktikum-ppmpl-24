export function tambah(a, b) {
    if (typeof a  === 'string' || typeof b === 'string' || a === null || b === null) {
        throw new Error('Hanya bisa memasukkan angka')
    }
    return a + b;
}

export function kurang(a, b) {
    if (typeof a  === 'string' || typeof b === 'string' || a === null || b === null) {
        throw new Error('Hanya bisa memasukkan angka')
    }
    return a - b;
}

export function kali(a, b) {
    if (typeof a  === 'string' || typeof b === 'string' || a === null || b === null) {
        throw new Error('Hanya bisa memasukkan angka')
    }
    return a * b;
}

export function bagi(a, b) {
    if (b === 0) {
        throw new Error('Tidak bisa membagi dengan 0')
    }
    else if (typeof a  === 'string' || typeof b === 'string' || a === null || b === null) {
        throw new Error('Hanya bisa memasukkan angka')
    }
    return a / b;
}


class ValueError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValueError";
    }
}

function capitalize_last_name(full_name) {
    if (typeof full_name !== 'string') {
        throw new TypeError('El argumento debe ser una cadena.');
    }
    full_name = full_name.trim();
    let words = full_name.split(' ').filter(Boolean);
    if (words.length !== 2) {
        throw new ValueError('La cadena debe tener exactamente dos palabras.');
    }
    let first_name = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    let last_name = words[1].toUpperCase();
    return `${first_name} ${last_name}`;
}


module.exports = {
    capitalize_last_name,
    ValueError
}
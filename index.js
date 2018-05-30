const americanBirds = require('./birds/american-birds');

const getByCode = code => {
    if (!code) return null;

    const upperCode = code.toUpperCase();

    return americanBirds
        .filter(b => b.fourLetterCode === upperCode || b.sixLetterCode === upperCode)[0];
};

const getByCommonName = name => {
    if (!name) return null;
    
    const commonName = name.toLowerCase();

    return americanBirds
        .filter(b => b.commonName.toLowerCase() === commonName)[0];
};

const getByScientificName = name => {
    if (!name) return null;

    const scientificName = name.toLowerCase();

    return americanBirds
        .filter(b => b.scientificName.toLowerCase() === scientificName)[0];
};

const rookery = {
    getByCode,
    getByCommonName,
    getByScientificName
};

module.exports = rookery;

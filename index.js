const americanBirds = require('./birds/american-birds');

const getByCommonName = name => {
    return americanBirds
        .filter(b => b.commonName === name)[0];
};

const getByScientificName = name => {
    return americanBirds
        .filter(b => b.scientificName === name)[0];
};

const rookery = {
    getByCommonName,
    getByScientificName
};

module.exports = rookery;

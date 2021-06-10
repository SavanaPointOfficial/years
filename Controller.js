const years = require('./years.json');

const getYears = (_, res) =>
{
    return res.json(years);
};

module.exports = getYears;
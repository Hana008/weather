const formatTemperature = kelvinTemp => {
    const celsiusTemp = kelvinTemp - 273.15;
    return Math.round((celsiusTemp + Number.EPSILON) * 100) / 100
};

module.exports = formatTemperature;
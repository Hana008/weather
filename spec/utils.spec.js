const { expect } = require('chai');
const  formatTemperature  = require('../src/utils/utils');

describe('formatTemperature', () => {
    it('returns a number', () => {
        expect(formatTemperature()).to.be.a('number')
    });
    it('does not mutate input data', () => {
        const input = 0;
        formatTemperature(input);
        expect(input).to.equal(0);
    });
    it('converts a singular number from Kelvin measurement to Celsius measurement', () => {
        const input = 9;
        const result = -264.15;
        expect(formatTemperature(input)).to.equal(result);
    });
    it('converts a larger number from Kelvin measurement to Celsius measurement', () => {
        const input = 286;
        const result = 12.85;
        expect(formatTemperature(input)).to.equal(result);
    });
    it('can handle inputs with a decimal point', () => {
        const input = 30.23;
        const result = -242.92;
        expect(formatTemperature(input)).to.equal(result);
    });
    it('returns up to two decimal points only', () => {
        const input = 345;
        const result = 71.85;
        expect(formatTemperature(input)).to.equal(result);
    });
});
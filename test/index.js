const { expect } = require('chai');
const {
    capitalize,
    initCap,
    capitalizeAndLowerCaseAllTheOthers,
    initCapAndLowerCaseAllTheOthers
} = require('../index');

describe('String Manipulation Functions', () => {
    describe('capitalize', () => {
        it('should capitalize the first letter of a string', () => {
            expect(capitalize('hello')).to.equal('Hello');
            expect(capitalize('world')).to.equal('World');
        });

        it('should return an empty string if provided an empty string', () => {
            expect(capitalize('')).to.equal('');
        });
    });

    describe('initCap', () => {
        it('should capitalize the first letter of each word in a string', () => {
            expect(initCap('hello world')).to.equal('Hello World');
            expect(initCap('multiple words in this string')).to.equal('Multiple Words In This String');
        });

        it('should return an empty string if provided an empty string', () => {
            expect(initCap('')).to.equal('');
        });
    });

    describe('capitalizeAndLowerCaseAllTheOthers', () => {
        it('should capitalize the first letter and lowercase the rest of the string', () => {
            expect(capitalizeAndLowerCaseAllTheOthers('HeLlO')).to.equal('Hello');
            expect(capitalizeAndLowerCaseAllTheOthers('worlD')).to.equal('World');
        });

        it('should return an empty string if provided an empty string', () => {
            expect(capitalizeAndLowerCaseAllTheOthers('')).to.equal('');
        });
    });

    describe('initCapAndLowerCaseAllTheOthers', () => {
        it('should capitalize the first letter of each word and lowercase the rest of the string', () => {
            expect(initCapAndLowerCaseAllTheOthers('HeLlO woRlD')).to.equal('Hello World');
            expect(initCapAndLowerCaseAllTheOthers('MuLtIplE WoRdS')).to.equal('Multiple Words');
        });

        it('should return an empty string if provided an empty string', () => {
            expect(initCapAndLowerCaseAllTheOthers('')).to.equal('');
        });
    });
});

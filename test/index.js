'use strict';

var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    n = require('../index.js'),
    capitalize = [
        'hello world',
        'hello World'
    ],
    capitalizeAndLowerCaseAllTheOthers = [
        'hello world',
        'hello wORld'
    ],
    initCap = [
        'hello world',
        'hello-world'
    ],
    initCapAndLowerCaseAllTheOthers = [
        'hello world',
        'hello WOrld',
        'hello-WOrld'
    ];



describe('##### String CASE #####', function() {

    it ('capitalize Format', function () {

        capitalize.forEach (function (string) {
            var result = n.capitalize(string);
            //console.log(result);
            result.should.be.a('string');
        });
    });

    it ('capitalize and lowercase all the others string', function () {

        capitalizeAndLowerCaseAllTheOthers.forEach (function (string) {
            var result = n.capitalizeAndLowerCaseAllTheOthers(string);
            //console.log(result);
            result.should.be.a('string');
        });
    });

    it ('First letter of each word to uppercase ', function () {

        initCap.forEach (function (string) {
            var result = n.initCap(string);
            //console.log(result);
            result.should.be.a('string');
        });
    });

    it ('First letter of each word to uppercase and others to lowercase', function () {

        initCapAndLowerCaseAllTheOthers.forEach (function (string) {
            var result = n.initCapAndLowerCaseAllTheOthers(string);
            //console.log(result);
            result.should.be.a('string');
        });
    });  

});

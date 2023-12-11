function capitalizeWord(word, lowerCaseOthers = false) {
    const lowerCased = lowerCaseOthers ? word.toLowerCase() : word;
    return lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
}

module.exports.capitalize = function (string) {
    return capitalizeWord(string);
}

module.exports.initCap = function (string) {
    return string.replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function (c) {
        return c.toUpperCase();
    });
}

module.exports.capitalizeAndLowerCaseAllTheOthers = function (string) {
    return capitalizeWord(string, true);
}

module.exports.initCapAndLowerCaseAllTheOthers = function (string) {
    return (string.toLowerCase()).replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function (c) {
        return c.toUpperCase();
    });
}

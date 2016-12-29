
module.exports.capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports.capitalizeAndLowerCaseAllTheOthers = function (string) {
    return string.charAt(0).toUpperCase() + (string.slice(1).toString().toLowerCase());
}

module.exports.initCap = function (string) {
    return string.replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function (c) {
        return c.toUpperCase();
    });
}

module.exports.initCapAndLowerCaseAllTheOthers = function (string) {
    return (string.toLowerCase()).replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function (c) {
        return c.toUpperCase();
    });
}

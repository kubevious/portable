module.exports.isStringMatch = (string, match) => {
    const regex = new RegExp(match, 'ig');
    return regex.test(string)
}

module.exports = function reverse (n) {
    let s = String(n);
    let newStr = s.replace(/[^0-9]/g, );
    let startMassive = newStr.split('');
    let revMassive = startMassive.reverse();
    let revStr = revMassive.join('');
    let result = parseInt(revStr, 10);
    return result;
};

// https://andrewlock.net/simple-obfuscation-of-email-addresses-using-javascript/
function encodeEmail(email, key) {
    var encodedKey = key.toString(16);
    var encodedString = make2DigitsLong(encodedKey);
    for(var n=0; n < email.length; n++) {
        var charCode = email.charCodeAt(n);
        var encoded = charCode ^ key;
        var value = encoded.toString(16);
        encodedString += make2DigitsLong(value);
    }
    return encodedString;
}
function make2DigitsLong(value){
    return value.length === 1 
        ? '0' + value
        : value;
}
function decodeEmail(encodedString) {
    var email = ""; 
    var keyInHex = encodedString.substr(0, 2);
    var key = parseInt(keyInHex, 16);
    for (var n = 2; n < encodedString.length; n += 2) {
        var charInHex = encodedString.substr(n, 2)
        var char = parseInt(charInHex, 16);
        var output = char ^ key;
        email += String.fromCharCode(output);
    }
    return email;
}
function updateAnchor(el) {
    var encoded = el.getAttribute('data');
    var decoded = decodeEmail(encoded);
    el.textContent = decoded;
    el.href = 'mailto:' + decoded + '?subject=Site%20feedback';
}
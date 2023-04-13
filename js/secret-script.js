// You need to encode full raffle URL
// Use browser console to run it :)
// But i forgot the key to encode... I remember exactly what I wrote about him somewhere...
function GeneratePasswordForPastebin(rawvalue, key) {
    var encodedKey = key.toString(16);
    var encodedString = make2DigitsLong(encodedKey);
    for(var n=0; n < rawvalue.length; n++) {
        var charCode = rawvalue.charCodeAt(n);
        var encoded = charCode ^ key;
        var value = encoded.toString(16);
        encodedString += make2DigitsLong(value);
    }
    return encodedString;
}
// Function make2DigitsLong can be really ignored.
function make2DigitsLong(value){
    return value.length === 1 
        ? '0' + value
        : value;
}
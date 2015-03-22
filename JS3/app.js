function isValidHex(hex) {
    if (hex.search(/[0-9A-F]/gi) !== -1) {
        return true;
    } else {
        return false;
    }
}

isValidHex('Z');
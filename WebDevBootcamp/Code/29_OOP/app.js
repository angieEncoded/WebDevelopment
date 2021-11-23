// Factory Functions


// This is from a stack overflow post that converts rgb to equivalent hex
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// This is a function that returns a css-ready string of rgb
function rgb(r, g, b) {
    return `rgb(${r},${g},${b})`
}

// Now we can create a factory function that will churn out an object that stores the values rgb right on it

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b
    color.rgb = function () {
        return `rgb(${this.r},${this.g},${this.b})`
    }
    return color;
}




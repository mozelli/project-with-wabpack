function sum(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b !== 0) {
        return a / b;
    }

    return 0;
}

export { mult, div as divisao };

export default sum;
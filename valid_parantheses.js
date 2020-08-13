function validParentheses(p) {
    let count = 0;
    for (let i = 0; i < p.length; i++) {
        if (p[i] === "(") {
            count++;
        };
        if (p[i] === ")") {
            count--;
        };
        if (count < 0) {
            return false;
        };
    }
    return count == 0;
}
var emi;
emi = "Next Level Web Developer";
emi.length;
emi.length;
function kgToGram(param) {
    if (typeof param === "string") {
        var value = parseFloat(param) * 1000;
        return "Please Check ".concat(value);
    }
    if (typeof param === "number") {
        return param * 1000;
    }
}
console.log(kgToGram(100));

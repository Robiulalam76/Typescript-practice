let emi: any

emi = "Next Level Web Developer";

(emi as string).length;
<string>emi.length



function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000
        return `Please Check ${value}`
    }
    if (typeof param === "number") {
        return param * 1000
    }
}

console.log(kgToGram(100) as number);
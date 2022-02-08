const numberCaller = (value: number): string | number => {
    if(value % 2 === 0 && value % 22 !== 0) {
        return "candy";
    } else if (value % 11 === 0 && value % 22 !== 0) {
        return "bar";
    } else if (value % 22 === 0) {
        return "candybar";
    } else {
        return value;
    }
}
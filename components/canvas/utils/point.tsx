export const point = function (num: number, digit: number) {
    let time = Math.pow(10, digit);
    return Math.floor(num * time) / time;
};


export function easeInOutCubic(t: number) {
    if (t < 0.5) {
        return 4 * t * t * t;
    } else {
        return 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
}
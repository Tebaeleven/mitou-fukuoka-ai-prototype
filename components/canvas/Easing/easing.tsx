export function easeInOutCubic(t: number) {
    if (t < 0.5) {
        return 4 * t * t * t;
    } else {
        return 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
}

export function easeOutQuad(t: number) {
    return t * (2 - t);
}

export function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
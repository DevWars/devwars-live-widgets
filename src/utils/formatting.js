export function formatLargeNumber(value) {
    if (Math.abs(value) > 999) {
        return Math.sign(value) * ((Math.abs(value) / 1000).toFixed(1)) + 'k';
    } else {
        return Math.sign(value) * Math.abs(value);
    }
}

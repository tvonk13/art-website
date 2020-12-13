export function sortAsc(a, b) {
    return sort(a, b,1);
}

export function sortDesc(a, b) {
    return sort(a, b, -1);
}

function sort(a, b, multiplier) {
    if (multiplier == null) multiplier = 1;
    if (a > b) return 1 * multiplier;
    if (a < b) return -1  * multiplier;
    return 0;
}
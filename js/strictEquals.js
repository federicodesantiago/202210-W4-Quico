export default function strictEquals(a, b) {
    if (Object.is(a, b)) {
        if (Number.isNaN(a) || Number.isNaN(b)) {
            return false;
        }
        return true;
    }
    if (
        Object.is(a, -0) ||
        Object.is(a, 0) ||
        Object.is(0, b) ||
        Object.is(-0, b)
    ) {
        return true;
    }
    return false;
}

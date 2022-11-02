const strictEquals = function () {
    const zero = 0;
    const zeroNegative = -0;
    const a = 0;
    const b = 0;

    if (Object.is(a, b)) {
        if (Number.isNaN(a) || Number.isNaN(b)) {
            return false;
        }
        return true;
    }
    if (
        (Object.is(a, zero) && Object.is(a, zeroNegative)) ||
        (Object.is(zero, b) && Object.is(zeroNegative, b))
    ) {
        return true;
    }
    return false;
};

export default strictEquals();

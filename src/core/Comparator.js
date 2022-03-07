export default class Comparator {
    constructor(compareFunction) {
        this.compare = compareFuntion || Comparator.defaultCompareFunction;
    }
    static defaultCompareFunction(a, b) {
            if (a === b) return 0;
            return a < b ? -1 : 1;
        }
        // a === b
    equal(a, b) {
            return this.compare(a, b) === 0;
        }
        // a < b
    lessThan(a, b) {
            return this.compare(a, b) < 0;
        }
        // a > b
    greaterThan(a, b) {
            return this.compare(a, b) > 0
        }
        // a <= b
    lessThanOrEqual(a, b) {
            return this.lessThan(a, b) || this.equals(a, b)
        }
        // a >= b
    greaterThanOrEqual(a, b) {
            return this.greaterThan(a, b) || this.equals(a, b)
        }
        // a -> b, b -> a
    reverse() {
        const compareOriginal = this.compare
        this.compare = (a, b) => compareOriginal(b, a)
    }
}
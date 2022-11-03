import strictEquals from "./strictEquals.js";

const results = [
    { a: 1, b: 1, result: strictEquals(1, 1) },
    { a: NaN, b: NaN, result: strictEquals(NaN, NaN) },
    { a: 0, b: -0, result: strictEquals(0, -0) },
    { a: -0, b: 0, result: strictEquals(-0, 0) },
    { a: 1, b: "1", result: strictEquals(1, "1") },
    { a: true, b: false, result: strictEquals(true, false) },
    { a: false, b: false, result: strictEquals(false, false) },
    { a: "Water", b: "Oil", result: strictEquals("Water", "Oil") },
];

console.table(results);

/*  ┌─────────┬─────────┬───────┬────────┐
    │ (index) │    a    │   b   │ result │
    ├─────────┼─────────┼───────┼────────┤
    │    0    │    1    │   1   │  true  │
    │    1    │   NaN   │  NaN  │ false  │
    │    2    │    0    │  -0   │  true  │
    │    3    │   -0    │   0   │  true  │
    │    4    │    1    │  '1'  │ false  │
    │    5    │  true   │ false │ false  │
    │    6    │  false  │ false │  true  │
    │    7    │ 'Water' │ 'Oil' │ false  │
    └─────────┴─────────┴───────┴────────┘  */

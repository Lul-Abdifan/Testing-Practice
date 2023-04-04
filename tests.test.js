const stringCounter = require('./stringCounter');
const reverseString = require('./reverseString');
const capitalize = require("./capitalize")
const calc = require('./calculator');
// for string counter
//Task 1
test('String Counter',()=>{
    expect(stringCounter("Hello")).toBe(5);
})
it('correct string length', ()=>{
    expect(stringCounter('ddpotamus')).toBe(9)
})

//Task 2
test("revese string",()=>{
    expect(reverseString("hello")).toBe("olleh");
})
test("revese string2",()=>{
    expect(reverseString("chala")).toBe("alahc");
})
//Task 3
describe("Calculator Operations",()=>{
    test("Addition",()=>{
        expect(calc.add(2,4)).toBe(6);
        expect(calc.add(2,14)).toBe(16);
    })
    test("Subtration",()=>{
        expect(calc.subtract(12,4)).toBe(8);
        expect(calc.subtract(16,14)).toBe(2);
    })
    test("Multiplication",()=>{
        expect(calc.multiply(12,4)).toBe(48);
        expect(calc.multiply(16,1)).toBe(16);
    })
    test("Division",()=>{
        expect(calc.divide(12,4)).toBe(3);
        expect(calc.divide(16,2)).toBe(8);
    })

})

//Task 4

test("Capitalize",()=>{
    expect(capitalize("hello")).toBe("Hello");
})

const encode = require("./tester.js")


describe("Testing cipher without DocumentElements",() => {

    test("Encode Test", () => {
        const encodeResult = encode("abcde", "2", true);

        expect(encodeResult).toBe("yzabc")
    })

    test("Decode Test", () => {
        const decodeResult = encode("cdeab", "2", false);

        expect(decodeResult).toBe("efgcd");
    })

    test("Uppercase Test", () => {
        const encodeResult = encode("ABCDE", "2", true);

        expect(encodeResult).toBe("YZABC")
    })

    test("Number Test", () => {
        const numberResult = encode("0123456789", "12", true);

        expect(numberResult).toBe("8901234567")
    })

    test("Symbol Test", () => {
        const symbolResult = encode("-+[", "4", true);

        expect(symbolResult).toBe("-+[")
    })

    
    test("Space Test", () => {
        const spaceResult = encode("A  A", "4", true);

        expect(spaceResult).toBe("W  W");
    })

})
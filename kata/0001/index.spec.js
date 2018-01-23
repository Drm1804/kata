describe('simple decision', () => {
    it('', () => {
        expect(solve("xyz","yxz")).toEqual(0);
    });
    it('', () => {
        expect(solve("abcxyz","ayxz")).toEqual(2);
    });
    it('', () => {
        expect(solve("abcdexyz","yxz")).toEqual(5);
    });
    it('', () => {
        expect(solve("axyyz","yxxz")).toEqual(0);
    });
    it('', () => {
        expect(solve("abdegfg","ffdb")).toEqual(0);
    });
    it('', () => {
        expect(solve("aabcdefg","fbd")).toEqual(5);
    });
    it('', () => {
        expect(solve("aabcdefg","fdb")).toEqual(5);
    });
});
describe('simple decision', () => {
    it('', () => {
        expect(solveHard("xyz","yxz")).toEqual(0);
    });
    it('', () => {
        expect(solveHard("abcxyz","ayxz")).toEqual(2);
    });
    it('', () => {
        expect(solveHard("abcdexyz","yxz")).toEqual(5);
    });
    it('', () => {
        expect(solveHard("axyyz","yxxz")).toEqual(0);
    });
    it('', () => {
        expect(solveHard("abdegfg","ffdb")).toEqual(0);
    });
    it('', () => {
        expect(solveHard("aabcdefg","fbd")).toEqual(5);
    });
    it('', () => {
        expect(solveHard("aabcdefg","fdb")).toEqual(5);
    });
});
import { numSquares } from '../../dynamic_programming_1d/perfectSquares';


describe('Perfect Squares tests', () => { 

    it("test one",()=> {
        expect(numSquares(12)).toBe(3)
    })
    it("test two",()=> {
        expect(numSquares(13)).toBe(2)
    })
 })
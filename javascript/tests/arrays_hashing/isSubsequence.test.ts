import { isSubsequesnce } from './../../arrays_hashing/isSubsequence';


describe('is subsequence', () => { 
    it('test one',()=>{
        expect(isSubsequesnce("abc","ahbgdc")).toBe(true)
    })

    it("test one", () => {
      expect(isSubsequesnce("axc", "ahbgdc")).toBe(false);
    });
 })
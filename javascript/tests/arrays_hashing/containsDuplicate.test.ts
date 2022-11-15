import { containsDuplicate } from '../../arrays_hashing/contains_duplicate';



describe('contains duplicate', () => { 
    it('test one',()=>{
        expect(containsDuplicate([1,2,3,1])).toBe(true)
    })

     it("test two", () => {
       expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
     });

 })
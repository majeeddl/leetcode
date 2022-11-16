import { replaceElements } from "../../arrays_hashing/replaceElemWithGreatest"




describe('replace element with greatest element on right side', () => { 
    it('test one',()=>{
        expect(replaceElements([17, 18, 5, 4, 6, 1])).toEqual([
          18, 6, 6, 6, 1, -1,
        ]);
    })

     it("test two", () => {
       expect(replaceElements([400])).toEqual([-1]);
     });

 })
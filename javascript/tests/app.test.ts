import { app } from './../src/app';



describe("App Tests",()=>{


    it("first test",async ()=>{
        expect(app(1,2)).toBe(3)
    })
})


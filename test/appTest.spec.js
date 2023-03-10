describe("Az app.js tesztjei:↓",()=>{
    it("bemenet 30,35 akkor 525",()=>{
        let actual=calcTriangleArea(30,35);
        expect(525).toBe(actual);
    })
    it("bemenet 100,130 akkor 6500",()=>{
        let actual=calcTriangleArea(100,130);
        expect(6500).toBe(actual);
    })
    it("MIN bemenet 1,3 akkor 1,5",()=>{
        let actual=calcTriangleArea(1,3);
        expect(1.5).toBe(actual);
    })
    it("MIN bemenet 3,1 akkor 1,5",()=>{
        let actual=calcTriangleArea(3,1);
        expect(1.5).toBe(actual);
    })
    it("MAX bemenet 2147483647,1 akkor 1,5",()=>{
        let actual=calcTriangleArea(3,1);
        expect(1.5).toBe(actual);
    })
describe("A bevitel ellenőrzésének ellenőrzése",()=>{
    it("Az a bemenetre null-t kell kapni",()=>{
        let actual=checkInput("a");
        expect(actual).toBeNull();
    })
    it("Az a bemenetre null-t kell kapni",()=>{
        let actual=checkInput("cica");
        expect(actual).toBeNull();
    })
    it("Az a bemenetre nem null-t kell kapni",()=>{
        let actual=checkInput("33");
        expect(actual).non.toBeNull();
    })
})
    
})

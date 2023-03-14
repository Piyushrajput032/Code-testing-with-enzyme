const sum=require('./Sum');

describe('Update Home Page',()=>{
        test('object test',()=>{
            let data=sum(1,2)
            expect(data).toEqual({name:'anshu'});
        })

    })
// describe('Update Home Page',()=>{
//     test('my sum in test',()=>{
//         expect(sum(1,1)).toBe(2);
//     })
//     test('my sum in 2 test',()=>{
//         expect(sum(2,1)).toBe(3);
//     })
//     test('my sum in 3 test',()=>{
//         expect(sum(8,1)).toBe(9);
//     })
//     test('my sum in 4 test',()=>{
//         expect(sum(7,1)).toBe(8);
//     })
//     test('my sum in 5 test',()=>{
//         expect(sum(4,1)).toBe(5);
//     })
// })


// test('my first testing',()=>{
//     let data=12;
//     expect(data).toBe(10);
// })
// it('my second test',()=>{
//     let data=34;
//     expect(data).toBe(34);
// })

// this test function takes two arguments first one is description of the test and second one is callback function in this callback function we actually write the implementation of this test case 

import { sum } from "../sum"

// 
test("Sum function should calculate the sum of two numbers" , () => {
    const result = sum(3,4);  // calculated the sum 
    // Assertion
    expect(result).toBe(7);  
})
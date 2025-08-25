import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

// you can group multiple test cases into a single block know as describe block , you can also have describe inside a describe (nested describe) 
describe("Contact Us page test cases", () => {

    // Whatever you have passed inside this beforeAll function's callback function it will run before all the test . If you want to do something before running all the test use beforeAll function
   // beforeAll(() => {
   //    console.log("Before All")
   // })

   // BeforeEach function will run before  each function. If you will have to something before each test case use beforeEach function
   // beforeEach(() => {
   //    console.log("Before Each")
   // })

   // similarly we have afterAll and afterEach
   //  AfterAll(() => {
   //    console.log("After All")
   // })

   //  AfterEach(() => {
   //    console.log("After Each")
   // })


   //  it is a alias of test , just another name for test
 test('should load contact  component', () => { 
    render(<Contact/>);

    const heading = screen.getByRole("heading");  // it will found all the headings inside the contact component

    //Assertion
    expect(heading).toBeInTheDocument();  // this toBeInTheDocument() will find whether my heading is inside the document (in screen) or not
 })

 it('should load  button inside contact  component', () => { 
    render(<Contact/>);

    // const button = screen.getByRole("button");    
    const button = screen.getByText("Submit");    

    //Assertion
    expect(button).toBeInTheDocument(); 
 })

  it('should load input name inside contact  component', () => { 
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("Name");    

    //Assertion
    expect(inputName).toBeInTheDocument(); 
 })

 it('should load two input boxes on the contact component', () => { 
    render(<Contact/>);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");    

    
    console.log(inputBoxes[0])   // this console.log will return your jsx element  (input element) that is a object

    console.log(inputBoxes.length)

    //Assertion
    expect(inputBoxes.length).not.toBe(3)
 })

})


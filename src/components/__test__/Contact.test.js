import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

// you can group multiple test cases into a single block know as describe block , you can also have describe inside a describe (nested describe) 
describe("Contact Us page test cases", () => {

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


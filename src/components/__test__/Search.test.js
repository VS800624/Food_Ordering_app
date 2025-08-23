import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// this global is a global object and we are defining the dummy fetch function , it will replace the fetch function  and we have to mock the fetch function in the body component the fetch function in the body component return a promise so we have to return a promise.resolve here and it resolve with a json and what happens this  json is again a function that returns a promise.resolve and this promise.resolve(data) have data over here. So we basically resolve the promise once and then we made this json and this json will have a function which again return the promise and here is  the data that which will return

// in simple words :
// fetch returns a **Promise<Response>`.
// response.json() returns a **Promise<parsed data>`.
// Finally, await gives you the plain object.

// fetch(url) → returns Promise<Response>.
// response.json() → returns Promise<object>.
// await → unwraps the promises step by step until you get the data.

//  You cannot make a api call in jsDOM
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the body component with search ", async () => {
  // when we test this body component, when we render the body component  it is rendering the body component on the jsDOM which is browser like it does not have the all the superpowers of the browser and this fetch is the superpower of the browser it is given by the browser it is not in javaScript it is not a native function it is given by the browser  and over here in the testing when we render this body component tis is been render in jsDOM which is browser like thing so it (jest) cannot understand what is fetch so we have to write mock function for the fetch
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
   
  const cardsBeforeSearch =  screen.getAllByTestId("resCard")

  expect(cardsBeforeSearch.length).toBe(20)

    const searchBtn = screen.getByRole("button", {name: "Search"})
//   console.log(searchBtn)

    const searchInput = screen.getByTestId("searchInput")   // to use getByTestId you have to give the element data-testid attribute (like here we have given input element in body component data-testid : "searchInput")
    fireEvent.change(searchInput, {target: {value: "pizza"}})  // this object is simulating what we get in onChange event (inside the e) in the input element

    fireEvent.click(searchBtn)

    // expect(searchBtn).toBeInTheDocument()

    //screen should 2 restaurant cards 
    const cards = screen.getAllByTestId("resCard")

    expect(cards.length).toBe(3)
});

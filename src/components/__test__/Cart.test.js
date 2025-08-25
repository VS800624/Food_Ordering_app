import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from '../mocks/mockResMenu.json'
import { Provider } from "react-redux"
import appStore from "../../utils//appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () =>  Promise.resolve(MOCK_DATA)
    })
})

it("should load restaurant Menu Component", async()=> {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={(appStore)}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
))

    const accordionHeader = screen.getByText("Pepperoni Pizza - Chef's Special (5)")
    fireEvent.click(accordionHeader)

    expect(screen.getAllByTestId("foodItems").length).toBe(5)

    const addBtns = screen.getAllByRole("button", {name: "Add +"})
    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(7)

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}))

    expect(screen.getAllByTestId("foodItems").length).toBe(5)

    expect(screen.getByText("Your cart is empty. Add items to the cart!"))

})

// When you write test case try to break down the test into small test cases, this test here should be done in four test cases 
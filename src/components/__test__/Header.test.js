import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should render Header component with a login button", () => {

    // we are rendering this header component in isolation in the js-dom , the js-dom  understand jsx code, react code , js code but it did not understand redux code , it does not know what is redux, it does know what is selector, it understand all the react part of code but when it comes to useSelector it does not understand it because it  the part of the redux so we will have to provide a redux store to our header even if we loading it in isolation we have to provide the store to them  and we also pass BrowserRouter and Provider

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
);   
    // const loginButton = screen.getByRole("button");   // it is the good way
     const loginButton = screen.getByRole("button", {name: "Login"});  // if there are multiple button and we want to specifically found the login button
    // const loginButton = screen.getByText("Login")   

    expect(loginButton).toBeInTheDocument()

   
})

it("should render Header component with a Cart items 0", () => {


    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
);   
     const cartItem = screen.getByText("Cart - (0 items)");  

    expect(cartItem).toBeInTheDocument()

   
})

it("should render Header component with a Cart item ", () => {


    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
);   
     const cartItem = screen.getByText(/Cart/);  

    expect(cartItem).toBeInTheDocument()

   
})

it("should change Login button to Logout on click ", () => {


    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
);   
    const loginButton = screen.getByRole("button", {name: "Login"});  

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument()

   
})
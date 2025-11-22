
# React Hooks
(Normal JS Utility functions)
-useState() - Superpowerfull State Variable in react
-useEffect()

React is fast because react is doing efficient DOM manipulation how because it has a virtual DOM (virtual DOM is JS representation of HTML) 

# 2 types of Routing in web apps
- Client Side Routing
- Server Side Routing

{itemCards.map((item) => (
  <li>{item.card.info.name}</li>
))}   
- This uses implicit return with () — which means the function automatically returns the <li> element.
- No need to write return manually.

# Redux ToolKit
  - Install @reduxjs/toolkit and react-redux  
  - Build our store
  - Connect our store to our app 
  - Slice (cartSlice) 
  - dispatch(action)
  - Selector

note :useSelector is used for reading and useDispatch for dispatching

Note: Redux and React are different libraries.
zustand is also a library like redux

Redux Store: Redux is nothing but a big whole object you can assume redux store is a big object kept in  central global space. Redux store is a kind of like a very big JS object with lot a data inside it and it is kept in the global centre place( so any component can access it inside our application , it can read and write data from that store) and we keep most of the major data of our application to this store, there is no problem with keeping the very big object with lot of data inside it, it is completely absolutely fine, but so that our redux store does not become very big , very clumsy we have something known as slices inside our redux store. Slices are the small portion of the redux store  and we create multiple slices inside our redux store. 
To keep data separate we make logical partitions and these logical partitions are slices.
Assume if we want to add cart data into our redux store we will create a separate slice (cartSlice) for our cart data, suppose if we want to keep logged in user info inside our redux store so, we will create the userSlice like of thing, etc so whatever you need to create we will create logical separations and we  will make small slices in our redux store.
 
 see the diagram in 29:30 video 12 or in telegram
when you click on the add button it dispatches an action which calls the reducer function (and this function modify the cart) which update the slice of the redux store now our redux store cart slice will have some data inside it this is how we write data

Now we will see how to read or get data from the cart over react component
we will use a selector to read the data from our redux store and the selector will modify our react component when we use selector this phenomena is known as subscribing to the store

# Important things to remember when using redux

- Whenever you are using the selector make sure your are subscribing to the right portion of the store here you can optimize the performance so if you don't subscribe to the right portion of the store it will be the big performance loss
const cartItems = useSelector((store) => store.cart.items)  here we are subscribing to the small portion of the store
we can also write it as store = useSelector((store) => store)  
const cartItems = store.cart.items
 and here we are subscribing the whole store and we are extracting our items  it will work fine but this is very less sufficient when you write like this the store variable is subscribed to the  redux store whenever anything changes in the store your cart component will get to know your store variable will be updated  whenever anything changes in the whole store and we don't want to subscribe to updates of whole store eg  suppose if something is happening inside other slice suppose user login it has nothing to do with cartSlice so why this store variable subscribed to the whole store it is foolish  and a better performance way is to only subscribe to the specific portion or small portion of the store  
 it's name is because it is selecting the portion of the store i.e you are subscribing the portion of the store that's why it is a selector


 # Types of testing (developer)
  - Unit Testing : Unit testing means you test your react components or one unit in isolation eg. if we want to test only the header component want we will do is we test our header component in the isolation basically we will try to render just the header component and we will we see whether it is  render properly or not only one specific component that type of testing is known as unit testing i.e. one unit of your react application (one component) you are testing specific small unit of your react application.
  - Integrating Testing : It means testing the integration of the components eg: suppose if we search over here "pizza" and click on the search so when we did this so many components collaborated to make this feature so it ids a integration of so many components , So testing features like this known as integration testing.
  Integration testing means there multiple components and they talking to each other and we will develop the flow of a action in our react application that we will test .
  - End to End Testing (e2e testing) : End to End testing means testing our react application as soon as user lands on the website to the user leaves the website and we will test all the flows (different types of flows) basically the end to end testing will starts from user landing on the page clicking on the login button entering the username, password going inside it finding the restaurant adding items to the cart and then checking out, basically it is kind of simulating what will the user do through the app or how the user will flow across the application that is end to end testing.

end to end testing requires different types of tools.

-React testing library builds on top of DOM testing library.
-React testing library uses something known as jest . Jest  is a delightful Javascript testing framework with a focus on simplicity. Jest works with projects using: Bebel, TypeScript, Node, React, Angular, Vue and more!


# Setting up Testing in our app
 - Install React Testing Library 
 - Install jest
 - Installed Babel dependencies
 - Configure Babel
 - Configure Parcel Config file to disable default babel transpilation
 - Jest configuration : npx create-jest@latest
 - Install jsdom library
 - Install npm i -d  @babel/preset-react : to make JSX work in test cases
 - Include @babel/preset-react inside my babel  config
 -  Install npm i -D @testing-library/jest-dom

 
 jsdom is like a browser it will give you the superpowers of the browser and all our testing code will be runs here.

 Why are we installing @babel/preset-react ?
 So basically babel is a transpiler , it basically converts your code from one form to another write now this @babel/preset-react helping our testing library to convert the jsx code to html so that it can read properly. The code we are testing is jsx code so that @babel/preset-react is helping this react code to convert into normal html code that's why we use preset

 Everytime in your test case you will render something then you will query something and then you will assert something

 Our npm start (parcel, vite) has HMR (Hot Module Replacement) and it automatically refreshes  what change we make over here in my code it automatically gets refreshed on the browser parcel is doing that we can do a similar thing inside our test also so that we don't have to write the command npm run test again and again. 
So, for that go to package.json just like we have the test command write create another test command : "watch-test" : "jest --watch" this command will basically run your test cases it won't stop it and it will keep running it if we make changes in any test file and save it , it will run automatically run test cases.

Whenever you are using fetch, state updates wrap your render function in the act() function in test file this act function comes from  "react-dom/test-utils" 
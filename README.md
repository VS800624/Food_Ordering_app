
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

 see the diagram in 29:30 video 12 or in telegram
when you click on the add button it dispatches an action which calls the reducer function which update the slice of the redux store now our redux store cart slice will have some data inside it this is how we write data

Now we will see how to read or get data from the cart over react component
we will use a selector to read the data from our redux store and the selector will modify our react component when we use selector this phenomena is known as subscribing to the store

# Important things to remember when using redux

- Whenever yo are using the selector make sure your are subscribing to the right portion of the store here you can optimize the performance so if you don't subscribe to the right portion of the store it will be the big performance loss
const cartItems = useSelector((store) => store.cart.items)  here we are subscribing to the small portion of the store
we can also write it as store = useSelector((store) => store)  
const cartItems = store.cart.items
 and here we are subscribing the whole store and we are extracting our items  it will work fine but this is very less sufficient when you write like this the store variable is subscribed to the  redux store whenever anything changes in the store your cart component will get to know your store variable will be updated  whenever anything changes in the whole store and we don't want to subscribe to updates of whole store eg  suppose if something is happening inside other slice suppose user login it has nothing to do with cartSlice so why this store variable subscribed to the whole store it is foolish  and a better performance way is to only subscribe to the specific portion or small portion of the store  
 it's name is because it is selecting the portion of the store i.e you are subscribing the portion of the store that's why it is a selector

import {
 // createBrowserRouter,
//   RouterProvider,
  Route,
  Routes,
  BrowserRouter,
  // Link,
} from "react-router-dom"

import FrontPageNoLogIn from "./pasilyo/FrontPageNoLogIn"
import Cart from "./pasilyo/Profile/Cart"
import PaymentDetails from "./pasilyo/Profile/PaymentDetails"
import ProductPage from "./pasilyo/Profile/ProductPage"
import UserProfile from "./pasilyo/Profile/UserProfile"
import UserReviews from "./pasilyo/Profile/UserReviews"
import FrontPage from "./pasilyo/FrontPage"
import UserTable from "./pasilyo/UserTable"
import AddUser from "./pasilyo/AddUser"
import UpdateUser from "./pasilyo/UpdateUser"

function App(){
  return(

    <div className = "App">

      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<FrontPageNoLogIn/>}></Route>
          <Route path = "/FrontPage" element = {<FrontPage/>} > </Route>
          <Route path = "/Cart" element = {<Cart/>} > </Route>
          <Route path = "/PaymentDetails" element = {<PaymentDetails/>} > </Route>
          <Route path = "/ProductPage" element = {<ProductPage/>} > </Route>
          <Route path = "/UserProfile" element = {<UserProfile/>} > </Route>
          <Route path = "/UserReviews" element = {<UserReviews/>} > </Route>
          <Route path = "/" element = {<UserTable/>} > </Route>
          <Route path = "/AddUser" element = {<AddUser/>} > </Route>
          <Route path = "/UpdateUser/:id" element = {<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>

      <></>


    </div>
  );
}

// import logo from './logo.svg';
// import './App.css';

/*


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and dave to die.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/
export default App;

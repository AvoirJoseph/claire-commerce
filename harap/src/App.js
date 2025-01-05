import {
 // createBrowserRouter,
//   RouterProvider,
  Route,
  Routes,
  BrowserRouter,
  // Link,
} from "react-router-dom"

import FrontPageNoLogIn from "./pasilyo/FrontPageNoLogIn"
import UserCart from "./pasilyo/UserCart"
import PaymentDetails from "./pasilyo/PaymentDetails"
import ProductPage from "./pasilyo/ProductPage"
import UserProfile from "./pasilyo/UserProfile"
import UserReviews from "./pasilyo/UserReviews"
import FrontPage from "./pasilyo/FrontPage"
import UserTable from "./pasilyo/UserTable"
import AddUser from "./pasilyo/AddUser"
import UpdateUser from "./pasilyo/UpdateUser"
import LogInPage from "./pasilyo/LogInPage"
import SignInPage from "./pasilyo/SignInPage"
import ProductList from "./pasilyo/ProductList"
import ProductUpload from "./pasilyo/ProductUpload"
import AdminViewFrontPage from "./pasilyo/AdminViewFrontPage"
import UpdateProduct from "./pasilyo/UpdateProduct"

function App(){
  return(

    <div className = "App">

      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<FrontPageNoLogIn/>}></Route>
          <Route path = "/FrontPage" element = {<FrontPage/>} > </Route>
          <Route path = "/UserCart" element = {<UserCart/>} > </Route>
          <Route path = "/PaymentDetails" element = {<PaymentDetails/>} > </Route>
          <Route path = "/ProductPage" element = {<ProductPage/>} > </Route>
          <Route path = "/UserProfile/:userName" element = {<UserProfile/>} > </Route>
          <Route path = "/UserReviews" element = {<UserReviews/>} > </Route>
          <Route path = "/UserTable" element = {<UserTable/>} > </Route>
          <Route path = "/AddUser" element = {<AddUser/>} > </Route>
          <Route path = "/UpdateUser/:id" element = {<UpdateUser/>}></Route>
          <Route path = "/LogInPage/" element = {<LogInPage/>}></Route>
          <Route path = "/SignInPage/" element = {<SignInPage/>}></Route>
          <Route path = "/ProductList/" element = {<ProductList/>}></Route>
          <Route path = "/ProductUpload/" element = {<ProductUpload/>}></Route>
          <Route path = "/AdminViewFrontPage/" element = {<AdminViewFrontPage/>}></Route>
          <Route path = "/UpdateProduct/:productID" element = {<UpdateProduct/>}></Route>
          
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

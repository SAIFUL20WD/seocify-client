import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import './App.css';
import DashBoard from "./components/DashBoard/DashBoard";
import Checkout from "./components/DashBoard/Checkout/Checkout";
import Review from "./components/DashBoard/Review/Review";
import Orders from "./components/DashBoard/Orders/Orders";
import AddService from "./components/Admin/AddService/AddService";
import ManageServices from "./components/Admin/ManageServices/ManageServices";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import OrderList from "./components/Admin/OrderList/OrderList";

export const UserContext = createContext() 

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/add-service">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/manage-services">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <PrivateRoute path="/make-admin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/order-list">
            <OrderList></OrderList>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

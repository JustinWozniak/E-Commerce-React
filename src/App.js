import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "../src/components/header/header.component";
import SignInAndSignUpPage from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.coponent";
import { auth } from "../src/firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      userName:null
    };
  }

  unSubscribeFromAuth = null;


  //Next two methods open and close as users sigh in/out. Saving us from memory leaks in our app
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      // this.setState({ userName: user.displayName });
      //THIS IS WHERE WE GET USER INFO FOR OUR ENTIRE PROJECT
      // console.log(user.displayName);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    // console.log(this.state.currentUser.)
    return (
      <div>
        <Header currentUser={this.state.currentUser} displayName={this.state.displayName} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

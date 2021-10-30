import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomepageLayout from './components/Home'
import About from './components/AboutUs'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MyProfile from './components/MyProfile'
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Route
            path="/home"
            exact
            render={() =>
              <HomepageLayout />}
          />
          <Route
            path="/about"
            exact
            render={() =>
              <About />}
          />
          <Route
            path="/profile"
            exact
            render={() =>
              <MyProfile />}
          />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
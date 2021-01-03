import React from 'react'
import {render} from 'react-dom'
import SearchParams from './SearchParams'
import {BrowserRouter as  Router,Link,Route } from 'react-router-dom';
import Detail from './Detail';
const App = () => {
  //   return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Adopt me!"),
  //   React.createElement(Pet, {
  //     name: "pepper",
  //     animal: "Bird",
  //     breed: "Cockitiel",
  //   }),
  //   React.createElement(Pet, { name: "Orio", animal: "Dog", breed: "Havenes" }),
  //   React.createElement(Pet, { name: "Doink", animal: "Dog", breed: "Mixed" })
  // );
  return(
    <React.StrictMode>
      <Router>
        <div>
          <header>
            <Link to="/" >Adobt me!</Link>
          </header>
          
              <React.Fragment>
                <Route  exact path="/" component={SearchParams} />
                <Route  exact path="/details/:id" component={Detail} />
              </React.Fragment>
        </div>
        </Router>
    </React.StrictMode>
  )
};
render(React.createElement(App), document.getElementById("root"));

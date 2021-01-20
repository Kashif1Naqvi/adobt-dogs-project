import React,{useState,lazy,Suspense} from 'react'
import {render} from 'react-dom'
import {BrowserRouter as  Router,Link,Route } from 'react-router-dom';
// import Details from './Details';
import themeContex from './Contex'
const Details = lazy(()=> import('./Details'));
const SearchParams  = lazy(()=> import('./SearchParams'))
const App = () => {
  const theme = useState('lightcoral')
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
    <themeContex.Provider value={theme}>
      <React.StrictMode>
        <Router>
          <div>
            <header>
              <Link to="/" >Adobt me!</Link>
            </header>
            <Suspense fallback={<h1>loading route...</h1>} >
                <React.Fragment>
                  <Route  exact path="/" component={SearchParams} />
                  <Route  exact path="/details/:id" component={Details} />
                </React.Fragment>
            </Suspense>
          </div>
          </Router>
      </React.StrictMode>
    </themeContex.Provider>
  )
};
render(React.createElement(App), document.getElementById("root"));

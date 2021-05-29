import React from 'react';
import axios from 'axios';

import { Home, Cart } from './pages';
import { Header } from './components';

import { Route } from 'react-router';

function App() {

  const [pizzas, setPizzas] = React.useState([]);

  //% componentDidMount()
  //* с добавлением "[]" вторым параметром в "useEffect()" 
  //* работает как "componentDidMount()"
  React.useEffect(() => {
    // fetch("http://localhost:3000/db.json")
    //   .then((resp) => {
    //     return resp.json()
    //   })
    //   .then(json => {
    //     return setPizzas(json.pizzas);
    //   })

    axios.get("http://localhost:3000/db.json")
      .then(({ data }) => {
        setPizzas(data.pizzas);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' render={() => <Home items={pizzas} />} exact />
        <Route path='/cart' component={Cart} exact />

      </div>
    </div>
  );
}

export default App;

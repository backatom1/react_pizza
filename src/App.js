import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Home, Cart } from './pages';
import { Header } from './components';

import { Route } from 'react-router';

import { setPizzas } from './redux/actions/pizzas';

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {

    //! Перенести в Redux и подключить redux-thunk
    axios.get("http://localhost:3001/pizzas")
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  )
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items))
//   }
// };

export default App;

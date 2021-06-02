import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Home, Cart } from './pages';
import { Header } from './components';

import { Route } from 'react-router';
//*import store from './redux/store';

import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

// function App() {

//   //% componentDidMount()
//   //* с добавлением "[]" вторым параметром в "useEffect()" 
//   //* работает как "componentDidMount()"
//   React.useEffect(() => {
//     // fetch("http://localhost:3000/db.json")
//     //   .then((resp) => {
//     //     return resp.json()
//     //   })
//     //   .then(json => {
//     //     return setPizzas(json.pizzas);
//     //   })

class App extends React.Component {

  componentDidMount() {
    axios.get("http://localhost:3000/db.json")
      .then(({ data }) => {
        this.props.setPizzas(data.pizzas);
      });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path='/' render={() => <Home items={this.props.items} />} exact />
          <Route path='/cart' component={Cart} exact />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

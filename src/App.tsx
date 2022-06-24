
import { Fragment } from 'react';
import Product from './Components/Product/Product';
import Header from './Layouts/Header/Header';
import './Styles/global.scss'

function App() {
  return (
    <Fragment>
   <Header />
   <Product />
    </Fragment>
  );
}

export default App;

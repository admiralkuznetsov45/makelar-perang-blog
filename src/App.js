import React from 'react';
import {Route , Routes} from 'react-router-dom';
import Header from './components/Header' ;
import Footer from './components/Footer';
import Home from './pages/Home'


function App() {
  return (
    <React.Fragment>
      <Header/>

      <main>
      <Routes>
        <Route path='/' elements={<Home/>}></Route>
      </Routes>
      </main>

      <Footer/>
    </React.Fragment>
  );
}

export default App;

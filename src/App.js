import React from 'react';
import { Header } from "./components/header/header";
import { MainPage} from "./pages/MainPage/MainPage";
import { CategoryPage } from "./pages/CategoryPage/CategoryPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Footer } from "./components/footer/footer";
import { Route, Routes } from 'react-router-dom'

import './App.css';

const App = () => {

  return (
    <section className='app-wrapper' >
        <div className='app' data-test-id='app'>        
          <Header /> 
          <Routes>
              <Route path='/' element={<MainPage />} exact />
              <Route path='/women' element={<CategoryPage page={"Women"} />} exact />
              <Route path='/men' element={<CategoryPage page={"Men"} />} exact />
              <Route path='/men/:id' element={<ProductPage page={"Women"} />} expect />
              <Route path='/women/:id' element={<ProductPage page={"Men"} />} expect />
          </Routes>
          <Footer />
        </div>
    </section> 
  );
}

export default App;

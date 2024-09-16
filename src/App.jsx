import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 


import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './pages/HeroSection';
import RentPage from './pages/RentPage';
import SellPage from './pages/Buy';
import Filters from './pages/Filters';
import Pg from './pages/Pg';
import Plot from './pages/Plot';
import Commercial from './pages/Commercial';
import Buy from './pages/Buy';
import FiltersRent from './filters/FiltersRent';
import FiltersBuy from './filters/FiltersBuy';
import FiltersPlot from './filters/FiltersPlot';
import FiltersPG from './filters/FiltersPG';
import FiltersCommercial from './filters/FiltersCommercial';
import PostProperty from './pages/PostProperty';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PropertyDetails from './propertypage/PropertyDetails';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <HeroSection />
            {/* <Filters/> */}
          </>
        }/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path="/buy" element={<Buy/>} />

        <Route path="/rent" element={<RentPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/pg" element={<Pg/>} />
        <Route path="/plot" element={<Plot/>} />
        <Route path="/commercial" element={<Commercial/>} />
        <Route path="/filters" element={<Filters/>} />
        

        <Route path="/rent/filters" element={<FiltersRent/>}/>
        <Route path="/buy/filters" element={<FiltersBuy/>}/>
        <Route path="/plot/filters" element={<FiltersPlot/>}/>
        <Route path="/pg/filters" element={<FiltersPG/>}/>
        <Route path="/commercial/filters" element={<FiltersCommercial/>}/>
        <Route path="/post-property" element={<PostProperty/>}/>
        <Route path="/property-details" element={<PropertyDetails/>}/>
        


      </Routes>
      <Footer/>

     
    </>
  );
};

export default App;

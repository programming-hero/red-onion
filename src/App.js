import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import MenuBar from './Component/MenuBar/MenuBar';
import FoodProduct from './Component/FoodProduct/FoodProduct';
import Footer from './Component/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BreakFast from './Component/BreakFast/BreakFast';
import Lunch from './Component/Lunch/Lunch';
import Dinner from './Component/Dinner/Dinner';
import ChooseTsFood from './Component/ChooseTsFood/ChooseTsFood';
import LunchSource from './Component/LunchSource/LunchSource';
import DinnerSource from './Component/DinnerSource/DinnerSource';
import BreakeFastSource from './Component/BreakeFastSource/BreakeFastSource';
import NotFound from './Component/NotFound/NotFound';
import CheckOut from './Component/CheckOut/CheckOut';
import ReviewItem from './Component/ReviewItem/ReviewItem';




function App() {
  return (
    
     <div>
       <Header></Header>
       <Banner></Banner>
       <MenuBar></MenuBar>
       
        <Router>
         <Switch>
           <Route path="/all" component={FoodProduct}>
             <FoodProduct></FoodProduct>
           </Route>
           <Route path="/breakfast" component={BreakFast}>
             <BreakeFastSource></BreakeFastSource>
           </Route>
           <Route path="/lunch" component={Lunch}>
             <LunchSource></LunchSource>
           </Route>
           <Route path="/dinner" component={Dinner}>
             <DinnerSource></DinnerSource>
           </Route>
           <Route>
             <ReviewItem path="/Review"></ReviewItem>
           </Route>
           <Route path="*">
              <NotFound></NotFound>
           </Route>
         </Switch>
       </Router>
       <ChooseTsFood></ChooseTsFood>
       <Footer></Footer>
     </div>
    
  );
}

export default App;

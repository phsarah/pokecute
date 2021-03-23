import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../pages/homePage/HomePage'
import Pokedex from '../pages/pokedex/Pokedex'
import DetailPage from '../pages/detailPage/DetailPage'

function Router(){
    return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/pokedex">
                    <Pokedex/>
                </Route>
                <Route exact path="/details">
                    <DetailPage/>
                </Route>
            </Switch>
            </BrowserRouter>
    )
}

export default Router;
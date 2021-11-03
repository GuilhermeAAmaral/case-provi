import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from '../pages/HomePage/HomePage'
import MoviePage from '../pages/MoviePage/MoviePage'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'

const Routers = () => {
    //Criação das rotas da página
    return (

        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/signup">
                    <SignupPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>
      
                <Route exact path="/movie">
                    <MoviePage />
                </Route>
     
                <Route>
                    <ErrorPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Routers
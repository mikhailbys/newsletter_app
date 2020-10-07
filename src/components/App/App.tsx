import React from 'react';
import './App.css';
import useStyles from './styles';
import {AppBar, Container, Typography} from "@material-ui/core";
import {Switch, Route, Redirect, Link} from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import { NewsContainer } from "../News/NewsContainer";
import {Home} from "../Home/Home";
import {Login} from "../Login/Login";
import {ProtectedRoute} from "../../hoc/ProtectedRoute/ProtectedRoute";
import {useDispatch} from "react-redux";
import {LoginButton} from "../../hoc/LoginButton/LoginButton";
import {login} from "../../store/actions/actions";
import {LoginContainer} from "../Login/LoginContainer";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const storageData = localStorage.getItem('isAuthorized');
  if (storageData) {
      try {
          const isAuthorized = JSON.parse(storageData);
          isAuthorized && dispatch(login());
      } catch (e) {
          console.log(e);
      }
  }

  return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar className={classes.fonts}>
            <Typography variant="h6" className={classes.title} component={Link} to="/" color="inherit">Home</Typography>
            <Typography variant="h6" className={classes.title} component={Link} to="/news" color="inherit">News</Typography>
            <Typography variant="h6" className={classes.title} component={Link} to="/profile" color="inherit">Profile</Typography>
            <LoginButton/>
          </Toolbar>
        </AppBar>
        <Container maxWidth="xl">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/news" component={ NewsContainer }/>
            <Route exact path="/profile" component={ ProtectedRoute } />
            <Route exact path="/login" component={ LoginContainer } />
            <Redirect to="/"/>
          </Switch>
        </Container>
      </div>
  );
}

export default App;

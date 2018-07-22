import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Movies from './components/Movies'
import AddMovie from './components/AddMovie'
import SearchBar from './components/SearchBar'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Route, Switch, NavLink } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
    alignItems: 'center'
  },
  navLinks : {
    margin: '0px 15px',
    color: 'white',
    textDecoration: 'none'
  },
  appBar : {
    alignItems: 'center',
    backgroundColor: '#232322'
  }
};

class App extends Component {
  render() {

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static" color="default">

          <Toolbar>
            <NavLink to="/" className={classes.navLinks}>
              <Typography variant="title" color="inherit">
                Home
              </Typography>
            </NavLink>
            <NavLink to="/movies" className={classes.navLinks}>
              <Typography variant="title" color="inherit">
                Tous les films
              </Typography>
            </NavLink>
            <NavLink to="/add-movie" className={classes.navLinks}>
              <Typography variant="title" color="inherit">
                Ajouter un film
              </Typography>
            </NavLink>
            <NavLink to="/search-movie" className={classes.navLinks}>
              <Typography variant="title" color="inherit">
                Rechercher
              </Typography>
            </NavLink>
          </Toolbar>

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Bienvenue sur CinéWild !</h1>
            </header>
        </div> 
        </AppBar>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movies" component={Movies} />
              <Route path="/add-movie" component={AddMovie} />
              <Route path="/search-movie" component={SearchBar} />
            </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);

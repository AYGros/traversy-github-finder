import React, { Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {

  // async componentDidMount() {
  //   this.setState({
  //     loading: true
  //   });

  //   const res = await axios
  //   .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });

  // }

// // search github users

// const searchUsers = async text => {
//   setLoading( true);

//   const res = await axios
//     .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//     setUsers(res.data.items);
//     setLoading(false);
    
// }

// get a single github user
// const getUser = async (username) => {
//   setLoading(true);
//   const res = await axios
//     .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//     setUser(res.data);
//     setLoading(false);
// }

// get user's repos
// const getUserRepos = async username => {
//   setLoading(true);

//   const res = await axios
//     .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//     setRepos(res.data);
//     setLoading(false);    
    
// }


// set alert
// const showAlert = (msg, type) => {

//   setAlert({msg, type})
  
//   setTimeout(()=> setAlert(null), 5000);
// };


    return (
      <GithubState>
        <AlertState>
      <Router>
      <div className="App">
        <Navbar title="GitHub Finder" icon="fab fa-github"/>
        <div className="container">
          <Alert  />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search  />
                <Users   />
              </Fragment>
            )} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={User}/>
          </Switch>
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );

  
}

export default App;

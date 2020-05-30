import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInAndSignUp from './pages/SignInAndSignUp';
import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component{

  unsubscribeFormAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      } 
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFormAuth()
  }

  render(){
    return (
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/' component = {HomePage} />
            <Route path='/shop' component = {ShopPage} />
            <Route path='/signin' component = {SignInAndSignUp} />
          </Switch>
        </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps )(App);

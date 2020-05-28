import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInAndSignUp from './pages/SignInAndSignUp';
import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFormAuth = null;

  componentDidMount(){
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
           currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
      } 
      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount(){
    this.unsubscribeFormAuth()
  }

  render(){
    return (
        <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component = {HomePage} />
            <Route path='/shop' component = {ShopPage} />
            <Route path='/signin' component = {SignInAndSignUp} />
          </Switch>
        </div>
    );
  }
}

export default App;

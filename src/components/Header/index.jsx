import React from 'react'

import './header.style.scss'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux' 

import CartICon from '../CartIcon'
import CartDropdown from '../CartDropdown'

import { auth } from '../../firebase/firebase.utils'


import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ currentUser, hidden }) =>{
    return(
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/about'>
                    ABOUT
                </Link>
                {
                    currentUser ?
                    <div className="option" onClick={ () => auth.signOut() }>
                        SIGN OUT                    
                    </div>
                    : 
                    <Link className="option" to="/signin"> SIGN IN </Link>
                }
                <CartICon />
            </div>
            {
             hidden ? null : <CartDropdown />
            }
            
        </div>
    )
}

const mapStateToProps = ({ user:{currentUser}, cart:{hidden} }) =>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
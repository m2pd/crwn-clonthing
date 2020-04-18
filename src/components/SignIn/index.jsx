import React from 'react';

import FormInput from '../FormInput'
import CustomButton from '../CustomButton'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './signin.style.scss';

class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email : '',
            password: ''
        }
    }

    handleOnSubmit = event =>{
        event.preventDefault();

        this.setState({ email:'', password:''})
    }

    handleOnChange = event =>{
        const { name, value } = event.target;

        this.setState({ [name] : value })
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleOnSubmit}>
                    <FormInput 
                        name="email" 
                        type="text" 
                        value={this.state.email}
                        handleChange={this.handleOnChange}
                        label="email" 
                        required />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleOnChange}  
                        label="password" 
                        required />
                    <div className="buttons">
                        <CustomButton type="submit" value="Form Submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import logo from './images/logo.svg';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {                                    /*when user is Signed in (if = true), the header will have SIGN OUT button.  */ 
        if(user){
            auth.signOut();                                                /*When that is pressed,with auth.signOut, it'll get signed out easily   */                                            
        }
    }
    return (
        <div className="header">
            <Link to="/">
            <img className="header_logo" 
            src={logo}>
            </img>
            </Link>

            <div className="header_search"> 
              <input className="header_searchInput" type="text"/>
              <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav" >

              <Link className="header_signInLink" to={!user && "/login"}>                                                          {/* Redirect to login page only if the user is not present, or only if the text says SIGN IN*/}
              <div onClick={handleAuthentication} className="header_option">
                  <span className='header_optionLineOne'>Hello {user? user.email : 'guest'}</span>
                  <span className='header_optionLineTwo'>{user? 'Sign Out' : 'Sign In'}</span>
              </div> 
              </Link>

              <div className="header_option">
                  <span className='header_optionLineOne'>Return</span>
                  <span className='header_optionLineTwo'>& Orders</span>
              </div>


              <Link className="header_basketLink" to="/checkout">
              <div className="header_optionBasket">
                  <ShoppingBasketIcon className="header_basketIcon" />
                  <span className="header_optionLineTwo header_basketCount">{basket?.length}</span></div>  
              </Link>
            </div>
        </div>
        
    )
}

export default Header

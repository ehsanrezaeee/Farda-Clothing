import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Fardalogo } from '../../assets/086 crown.svg';
import { UserContex } from "../../contexts/usercontext";
import './navigation.styles.scss';
import { signOutUser } from "../../utility/firebase/firebase";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";



const NavBare = () => {
  const { currentUser } = useContext(UserContex);
  const [showcart, setShowcart] = useState(false)
  const clickcarthandler = () => {
    setShowcart(!showcart);
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link to='/' className="logo-container">
          <Fardalogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            فروشگاه
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>خروج</span>)
              : (<Link className="nav-link" to='/auth'>
            ثبت نام/ورود
          </Link>
            )
          }
          <CartIcon clicky={clickcarthandler}/>
        </div>
        {showcart && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavBare;
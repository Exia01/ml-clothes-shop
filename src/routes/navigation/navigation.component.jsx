import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

//styles
import './navigation.styles.scss';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Navigation = () => {
  return (
    // fragment renders to nothing/ Components need to have a parent component
    // could also do empty brackets <> </>
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

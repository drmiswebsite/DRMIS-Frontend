import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Nav.scss';

import yellowLocation from '../../icons/yellow-location.svg';
import yellowClock from '../../icons/yellow-clock.svg';
import yellowUser from '../../icons/yellow-user.svg';
import blueLogo from '../../icons/blue-logo.svg';
import blueSearch from '../../icons/blue-search.svg';

function Nav() {
  const { pathname } = useLocation();

  const [memberIsActive, setMemberIsActive] = useState(false);
  const [accomplishmentIsActive, setAccomplishmentIsActive] = useState(false);
  const [searchIsActive, setSearchIsActive] = useState(false);

  useEffect(() => {
    setMemberIsActive(false);
    setAccomplishmentIsActive(false);
    setSearchIsActive(false);
  }, [pathname]);

  function navClickHandler() {
    this !== 'member' && setMemberIsActive(false);
    this !== 'accomplishment' && setAccomplishmentIsActive(false);
    this !== 'search' && setSearchIsActive(false);

    switch (this) {
      case 'member':
        setMemberIsActive((prev) => !prev);
        break;
      case 'accomplishment':
        setAccomplishmentIsActive((prev) => !prev);
        break;
      case 'search':
        setSearchIsActive((prev) => !prev);
        break;
      default:
        break;
    }
  }

  return (
    <div className="nav">
      <div className="upper">
        <div className="blank"></div>
        <div className="addr-working-container">
          <div className="addr">
            <img src={yellowLocation} alt=""></img>
            <p>Address : Room 511, 5F, Engineering Building 4, Faculty of Engineering, CU</p>
          </div>
          <div className="separator"></div>
          <div className="working">
            <img src={yellowClock} alt=""></img>
            <p>Working : Monday - Friday, 9:00am - 4:00pm</p>
          </div>
        </div>
        <div className="login">
          <img src={yellowUser} alt=""></img>
          <Link>Login</Link>
        </div>
      </div>
      <div className="lower">
        <Link to="/">
          <img className="logo" src={blueLogo} alt=""></img>
        </Link>
        <div className="btn-container">
          <div>
            <button onClick={navClickHandler.bind('member')}>Members</button>
            {memberIsActive && (
              <div className="link-container">
                <Link to="/member-current">Current</Link>
                <Link to="/member-alumni">Alumni</Link>
              </div>
            )}
          </div>
          <div>
            <button onClick={navClickHandler.bind('accomplishment')}>Accomplishments</button>
            {accomplishmentIsActive && (
              <div className="link-container">
                <Link to="/accomplishment-publication">Publications</Link>
                <Link to="/accomplishment-activity">Activities</Link>
                <Link to="/accomplishment-project">Projects</Link>
              </div>
            )}
          </div>
          <div>
            <Link to="/recruitment">Recruitment</Link>
          </div>
          <div>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
        <div className="search-container">
          <button onClick={navClickHandler.bind('search')}>
            <img src={blueSearch} alt=""></img>
            <p>Search</p>
          </button>
          {searchIsActive && (
            <div className="input-container">
              <div className="input">
                <input placeholder="Search"></input>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
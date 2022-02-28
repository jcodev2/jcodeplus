/* **************** Imports **************** */
// Disney+ Header
import { NavLink } from 'react-router-dom'
import logo from '../assets/svg/logo.svg'
import FilmSVG from './svgs/FilmSVG'
import HouseSVG from './svgs/HouseSVG'
import PlusSVG from './svgs/PlusSvg'
import SearchSVG from './svgs/SearchSVG'
import StarSVG from './svgs/StarSVG'
import TVSVG from './svgs/TVSVG'
import styles from '../styles/Header.css'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Header = () => {
  return (
    <header className='header'>
      <div className='header-logo'>
        <img src={logo} alt='logo' />
      </div>

      <div className='header-nav'>
        <NavLink to='/'>
          <HouseSVG />
          <span>Home</span>
        </NavLink>
        <NavLink to='/search'>
          <SearchSVG />
          <span>Search</span>
        </NavLink>
        <NavLink to='/mylist'>
          <PlusSVG />
          <span>My List</span>
        </NavLink>
        <NavLink to='/originals'>
          <StarSVG />
          <span>Originals</span>
        </NavLink>
        <NavLink to='/movies'>
          <FilmSVG />
          <span>Movies</span>
        </NavLink>
        <NavLink to='/series'>
          <TVSVG />
          <span>Series</span>
        </NavLink>
      </div>

      <div className='header-user'>
        <img
          src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=mm'
          alt='user'
        />
      </div>
    </header>
  )
}

/* **************** Code Execution **************** */
export default Header

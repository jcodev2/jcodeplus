/* **************** Imports **************** */
import { NavLink } from 'react-router-dom'
import FilmSVG from './svgs/FilmSVG'
import HouseSVG from './svgs/HouseSVG'
import PlusSVG from './svgs/PlusSvg'
import SearchSVG from './svgs/SearchSVG'
import StarSVG from './svgs/StarSVG'
import TVSVG from './svgs/TVSVG'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Navigation = () => {
  return (
    <div className='header-nav'>
      <NavLink to='/home-page'>
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
  )
}

/* **************** Code Execution **************** */
export default Navigation

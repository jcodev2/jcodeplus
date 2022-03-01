/* **************** Imports **************** */
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/home-page' element={<HomePage />} /> */}
      {/* <Route path='/search' element={<Search />} /> */}
      {/* <Route path='/mylist' element={<MyList />} /> */}
      {/* <Route path='/originals' element={<Originals />} /> */}
      {/* <Route path='/movies' element={<Movies />} /> */}
      {/* <Route path='/series' element={<Series />} /> */}
      <Route path='/login' element={<Register />} />
    </Routes>
  )
}

/* **************** Code Execution **************** */
export default Router

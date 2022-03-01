/* **************** Imports **************** */
import logo from '../assets/svg/logo.svg'
import styles from '../styles/Home.css'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='home-container'>
          <div className='home-logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='home-action'>
            <button className='home-action-button'>Get All There</button>
          </div>
          <div className='home-copyright'>
            <p>
              El precio podría variar en caso de que el pago se realice en otras
              monedas, plataformas o medios de pago. Podrían aplicar cargos de
              terceros.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

/* **************** Code Execution **************** */
export default Home

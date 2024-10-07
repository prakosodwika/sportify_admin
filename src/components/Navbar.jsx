import profilNull from '../assets/images/profil.png'

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-5 py-">
        <h3>Sportify</h3>
        <div >
          <i className="bi bi-bell-fill mx-3 align-middle text-color-secondary-black"></i>
          <img
            src={profilNull}
            alt='Profil'
            className='rounded-circle'
            style={{ width: '25px', height: '25px' }}
          />
        </div>
      </div>
    </nav>
  );

}

export default Navbar
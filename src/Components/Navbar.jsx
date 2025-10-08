import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand text-black fw-bold fs-3 text-uppercase fst-italic " to="/">𝔽𝕦𝕣𝕟𝕚𝕥𝕦𝕣𝕖</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link ms-4 text-white fs-5" to="/" end>𝐻𝑜𝓂𝑒</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ms-4 text-white fs-5" to="/about">𝘼𝙗𝙤𝙪𝙩</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ms-4 text-white fs-5" to="/product">𝙋𝙧𝙤𝙙𝙪𝙘𝙩 </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ms-4 text-white fs-5 " to="/feedback">𝙁𝙚𝙚𝙙𝙗𝙖𝙘𝙠</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ms-4 text-white fs-5 " to="/Login">𝙇𝙤𝙜𝙞𝙣</NavLink>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

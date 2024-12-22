import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Root = () => {
  return (
    <div>
      <header>
        <h1>WELCOME TO O-SHOPPING</h1>
        <nav>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/pdt'>PRODUCTS</Link></li>
            <li><Link to='/login'>LOGIN</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>
          <FontAwesomeIcon icon={faPhone} /> 
        </p>
        <p>
          <FontAwesomeIcon icon={faWhatsapp} />
        </p>
        <p>
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </footer>
    </div>
  );
};

export default Root;

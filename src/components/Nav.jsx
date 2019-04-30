import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return(
    <div>
      <div>
        <style jsx global>{`
          .nav {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            align-content: center;
            background-image: linear-gradient(white, #68DCDD);
          }
          .fixed {
            position: fixed;
            width: 100%;
          }
          button {
            background-color: transparent;
            border: none;
            font-size: 15px;
            font-family: sans-serif;
            font-weight: lighter;
            margin-left: 35%;
            text-color: #8A7CB5
            text-weight: bolder;
          }
          button:hover {
            cursor: pointer;
            color: cornflowerblue;
          }          
        `}</style>
      </div>
      <div className="fixed">
        <nav className="nav">
          <div>
            <Link to='/'><button>Home</button></Link>
          </div>
          <div>
            <Link to='/create-post'><button>Create Post</button></Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;


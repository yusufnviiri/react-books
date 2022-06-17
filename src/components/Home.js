import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  const links = [
    {
      id: 1,
      path: '/allbooks',
      text: 'Bookstore',
    },
    {
      id: 2,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 3,
      path: '/category',
      text: 'CATEGORIES',
    },
    {
      id: 4,
      path: '/user',
      text: <FaUserCircle />,
    },

  ];
  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>

    </nav>
  );
}

export default Home;

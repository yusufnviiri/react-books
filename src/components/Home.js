import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  const links = [
    {
      id: 1,
      path: '/allbooks',
      text: 'Bookstore CMS',
      class: 'item1',
    },
    {
      id: 2,
      path: '/',
      text: 'BOOKS',
      class: 'item2',
    },
    {
      id: 3,
      path: '/category',
      text: 'CATEGORIES',
      class: 'item3',
    },
    {
      id: 4,
      path: '/user',
      text: <FaUserCircle style={{ height: '300px', width: '50px' }} />,
      class: 'item4',
    },

  ];
  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => (
          <li key={link.id} id={link.class}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>

    </nav>
  );
}

export default Home;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <h1>Expensify</h1>
        <NavLink activeClassName='is-active' to='/' exact>
          Home
        </NavLink>
        <span> - </span>
        <NavLink activeClassName='is-active' to='/create'>
          Add Expense
        </NavLink>
      </header>
    </div>
  );
};

export default Header;

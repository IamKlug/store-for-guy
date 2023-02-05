import React from 'react';

function Header(props) {


  return (
    <header>
        <div> It's a heckin Store </div>
      <form onSubmit={props.searchProducts}>
        <input
          type="text"
          placeholder="Search products"
          value={props.searchTerm}
          onChange={(event) => props.handleSearch(event)}
        />
        <button type="submit" >Search</button>
      </form>
    </header>
  );
}

export default Header;

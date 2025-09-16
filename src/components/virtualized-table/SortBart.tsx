// src/components/SortBar.js
import React from 'react';

function SortBar({ sortBy, setSortBy, sortKey, setSortKey }: any) {
  return (
    <div className='sort-bar'>
      <label>
        Sort By:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value=''>(none)</option>
          <option value='id'>ID</option>
          <option value='name'>Name</option>
          <option value='email'>Email</option>
          <option value='status'>Status</option>
          <option value='score'>Score</option>
          <option value='updatedAt'>Updated At</option>
          <option value='department'>Department</option>
          <option value='city'>City</option>
          <option value='country'>Country</option>
          <option value='phone'>Phone</option>
        </select>
      </label>

      <label>
        Direction:
        <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
          <option value='asc'>Asc</option>
          <option value='desc'>Desc</option>
        </select>
      </label>
    </div>
  );
}

export default SortBar;

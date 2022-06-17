import React from 'react';
import Select from 'react-select';

function Bookinput() {
  const Action = [{
    value: 'Action',
    label: 'Action',
  },
  {
    value: 'Economy',
    label: 'Economy',
  }];

  return (
    <div>
      <form>
        <h1>ADD NEW BOOK</h1>
        <div className="form">
          <input type="text" name="title" placeholder="Book title" />
          <input type="text" name="author" placeholder="Book Arthor" />

          <Select className="select" options={Action} placeholder="Action" />
          <button type="submit">ADD BOOK</button>

        </div>

      </form>

    </div>
  );
}

export default Bookinput;

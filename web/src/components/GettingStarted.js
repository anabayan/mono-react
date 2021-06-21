import React from 'react';

import { Link } from '@reach/router';

import { CommonComponent } from "common/components/common";

import '../App.css';

export const GettingStarted = () => (
  <div>
    <header className='App-header'>
      <div>
        <Link to='/intro/' style={{ color: '#FFFFFF' }}>
          <CommonComponent />
        </Link>
      </div>
      <br />
    </header>
  </div>
);

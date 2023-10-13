/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'services', 'clients', 'skills', 'testimonial', 'contact'].map((item, index) => ( //services and clients = about and work in db
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#da1c5c' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
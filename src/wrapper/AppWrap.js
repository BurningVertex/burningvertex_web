import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">©2025 Burning Vertex</p>
          <p className="p-text">All rights reserved</p>
          <p className="p-textkvk">KVK-nummer:85606804</p>
      </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-hextras.jpg';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation className={s.nav} />
        <Link className={s.brand} to="/">
          <span className={s.brandTxt}>SET<span>X</span></span>
        </Link>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>SET<span>X</span></h1>
          <p className={s.bannerDesc}>Signing up extras made easy</p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(Header);

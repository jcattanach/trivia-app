import React, { Component } from 'react';
import Menu from './components/Menu'
import { Footer } from './components/Footer'

class BaseLayout extends Component {
  render() {
    return (
      <div className="BaseLayout">
        <Menu />
        Base Layout
        <Footer />
      </div>
    );
  }
}

export default BaseLayout;

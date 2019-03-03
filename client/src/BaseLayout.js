import React, { Component } from 'react';
import Menu from './components/Menu'
import { Footer } from './components/Footer'
import Questions from './components/Questions'

class BaseLayout extends Component {
  render() {
    return (
      <div className="BaseLayout">
        <Menu />
        Base Layout
        <Footer />
        <Questions />
      </div>
    );
  }
}

export default BaseLayout;

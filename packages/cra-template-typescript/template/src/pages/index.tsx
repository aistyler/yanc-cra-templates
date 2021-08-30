import React from 'react';

import Layout from "../components/Layout";

import logo from './logo.svg';
import './index.css';

const Index: React.FC<any> = () => {
  return (
    <Layout>
      <header className="page-header">
        <img src={logo} className="page-logo" alt="logo" />
        <p>
          Edit <code>src/pages/index.tsx</code> and save to reload.
        </p>
        <a
          className="page-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Layout>
  );
}

export default Index;

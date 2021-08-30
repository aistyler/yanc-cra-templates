import React from 'react';
import s from './layout.module.css';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <header className={`${s.LayoutHeader} container`}>
        <h1>Header</h1>
      </header>
      <main className={`${s.LayoutMain} container`}>
        {children}
      </main>
      <footer className={`${s.LayoutFooter} container`}>
        <h3>Footer</h3>
      </footer>
    </div>
  );
}

export { Layout };

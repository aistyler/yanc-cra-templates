import React from 'react';
import s from './layout.module.css';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className={s.Layout}>
      <header className={s.LayoutHeader}>
      </header>
      <main className={s.LayoutMain}>
        {children}
      </main>
      <footer className={s.LayoutFooter}>
      </footer>
    </div>
  );
}

export default Layout;

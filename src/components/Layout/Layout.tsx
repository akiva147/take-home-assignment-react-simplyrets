import { Outlet, useLocation } from 'react-router';
import classes from './layout.module.scss';

export interface LayoutProps {}

export const Layout = (props: LayoutProps) => {
  const location = useLocation();
  const { hash, pathname, search } = location;

  return (
    <div>
      <header>
        Pathname: <b>{pathname}</b>
        <br />
        Search params: <b>{search}</b>
        <br />
        Hash: <b>{hash}</b>
      </header>
      <Outlet />
    </div>
  );
};

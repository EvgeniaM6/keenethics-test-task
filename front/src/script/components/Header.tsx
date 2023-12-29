import { APP_TITLE } from '../constants';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <h1 className="logo">{APP_TITLE}</h1>
        </div>
      </div>
    </header>
  );
};

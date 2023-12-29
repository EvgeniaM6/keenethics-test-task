export const Footer = () => {
  const firstName = 'FirstName';
  const lastName = 'LastName';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__dev dev">
            <span className="dev__title">Developer:</span>
            <span className="dev__name">{`${firstName} ${lastName}`}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

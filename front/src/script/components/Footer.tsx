export const Footer = () => {
  const firstName = 'FirstName';
  const lastName = 'LastName';

  return (
    <footer>
      <div>
        <span>Developer:</span>
        <span>{`${firstName} ${lastName}`}</span>
      </div>
    </footer>
  );
};

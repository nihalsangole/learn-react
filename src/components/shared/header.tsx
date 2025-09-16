import { Link } from 'react-router-dom';

type HeaderProps = {
  className?: string;
};

function Header({ className }: HeaderProps) {
  return (
    <nav className={className}>
      <Link to='/todo'>todo app</Link> | <Link to='/hooks'>hooks learn</Link> |{' '}
      <Link to='/quiz'>Quiz</Link> |{' '}
      <Link to='/appointment'>Appointment Booking App</Link> |{' '}
      <Link to='/virtualized-table'>Virtualized Table</Link> |{' '}
    </nav>
  );
}

export default Header;

import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to='/todo'>todo app</Link> | <Link to='/car_app'>car app</Link> |{' '}
      <Link to='/contact'>Contact form</Link> |{' '}
      <Link to='/hooks'>hooks learn</Link> | <Link to='/quiz'>Quiz</Link>
    </nav>
  );
}

export default Header;

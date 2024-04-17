import './Header.scss';
import { Link } from 'react-router-dom';

const Header:React.FC = () => {
  return (
    <>
      <header className="header">
        <Link to="/">Blog</Link>
        <Link to="/contact">お問い合わせ</Link>
      </header>
    </>
  )
}

export default Header;
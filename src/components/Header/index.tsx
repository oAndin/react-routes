import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <Link to={'/'}>Home</Link>
                <br />
                <Link to={'/sobre'}>Sobre</Link>
            </header>
        </>
    );
};

export default Header;
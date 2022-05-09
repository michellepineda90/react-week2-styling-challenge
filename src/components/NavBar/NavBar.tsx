import './NavBar.css';
import Gradient from '../Gradient/Gradient';
import NavBarSection from '../NavBarSection/NavBarSection';
import CreateNewSection from '../CreateNewSection/CreateNewSection';
import MoreOptionsSection from '../MoreOptionsSection/MoreOptionsSection';

function NavBar() {
    return (
        <div className='navBar'>
            <Gradient className='gradientOne' />
            <div className='sections'>
                <NavBarSection />
                <MoreOptionsSection />
                <CreateNewSection />
            </div>
        </div>
    );
}
  
export default NavBar;

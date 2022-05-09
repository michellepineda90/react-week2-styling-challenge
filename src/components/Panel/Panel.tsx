import './Panel.css';
import NameSection from '../NameSection/NameSection';
import StorageSection from '../StorageSection/StorageSection';
import BuySpaceSection from '../BuySpaceSection/BuySpaceSection';

function Panel() {
    return (
        <div className='panel'>
            <NameSection name='Michelle' />
            <hr className='lineTwo'></hr>
            <StorageSection />
            <BuySpaceSection 
                message='Buy more space now!'
                subtitle='Upgrade to cloud premium'
                btnText='Upgrade Account!'
                className='gradientTwo'
            />
        </div>
    );
}
  
export default Panel;

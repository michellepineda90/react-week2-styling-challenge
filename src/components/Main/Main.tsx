import './Main.css';
import SearchBar from '../SearchBar/SearchBar';
import RecentlyUsedSection from '../RecentlyUsedSection/RecentlyUsedSection';
import RecentFilesSection from '../RecentFilesSection/RecentFilesSection';
import ShareSection from '../ShareSection/ShareSection';

function Main() {
    return (
        <div className='main'>
            <SearchBar />
            <RecentlyUsedSection />
            <RecentFilesSection />
            <ShareSection />
        </div>
    );
}
  
export default Main;

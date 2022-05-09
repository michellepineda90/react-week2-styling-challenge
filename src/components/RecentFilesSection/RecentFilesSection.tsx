import '../Main/Main.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import RecentFilesPreview from '../RecentFilesPreview/RecentFilesPreview';

function RecentFilesSection() {
    return (
        <div className='rcntFiles section'>
            <SectionHeader title='Recent Files' />
            <RecentFilesPreview />
        </div>
    )
}

export default RecentFilesSection;

import '../Main/Main.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import ShareFilesPreview from '../ShareFilesPreview/ShareFilesPreview';

function ShareSection() {
    return (
        <div className='shareWithMe section'>
            <SectionHeader title='Share with me' />
            <ShareFilesPreview />
        </div>
    )
}

export default ShareSection;

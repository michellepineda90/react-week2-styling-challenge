import '../NavBar/NavBar.css';
import Option from '../Option/Option';

function moreOptionsSection() {
    const sections = [
        { name: 'Upload Files' },
        { name: 'Upload Folder' }, 
        { name: 'New Folder' },
        { name: 'More' },
    ]
    
    return (
        <div className='wrapper'>
            <div className='moreOptionsSection'>
                {sections.map((section) => (
                    <Option key={section.name} name={section.name} />
                ))}
            </div>
            <div className='arrowDown' />
        </div>
    )
}

export default moreOptionsSection;
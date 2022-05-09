import '../NavBar/NavBar.css';
import NavBarSections from '../NavBarSections/NavBarSections'

function NavBarSection() {
    const sections = [
        { name: 'Home' },
        { name: 'My Files' },
        { name: 'Recent Files' },
        { name: 'Shared Files' },
        { name: 'File Request' },
        { name: 'Trash' },
    ]
    
    return (
        <><div className='sctn'>
            {sections.map((section) => (
                <NavBarSections key={section.name} name={section.name} />
            ))}
        </div><hr className='lineOne' /></>
    )
}

export default NavBarSection;
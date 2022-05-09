import '../NavBar/NavBar.css';
import NavBarSections from '../NavBarSections/NavBarSections'

function NavBarSection() {
    const sections = [
        { name: 'Home', state: 'isActive' },
        { name: 'My Files', state: '' },
        { name: 'Recent Files', state: '' },
        { name: 'Shared Files', state: '' },
        { name: 'File Request', state: '' },
        { name: 'Trash', state: '' },
    ]
    
    return (
        <><div className='sctn'>
            {sections.map((section) => (
                <NavBarSections key={section.name} name={section.name} state={section.state}/>
            ))}
        </div><hr className='lineOne' /></>
    )
}

export default NavBarSection;

import React from 'react';
import '../NavBar/NavBar.css';

interface INavBarSection {
    name: string;
    state: string;
}

function NavBarSections({name, state}: INavBarSection) {

//   const [isActive, setIsActive] = useState(false);
//   const handleClick = event => {
//     setIsActive(current => !current);
//     isActive class
//   };

    function handleClick(event: { currentTarget: { classList: { toggle: (arg0: string) => any; }; }; }) {
        return event.currentTarget.classList.toggle('selectedButton');
    }

    
    if (state === 'isActive') {
            return (
                <div className='sectionItem'>
                    <div className='pointer selected'></div>
                    <input type='button' className='navBarBtn btn selectedButton' id={name} name={name} onClick={handleClick}/>
                    <label htmlFor={name} className='label selectedLabel'>{name}</label>
                </div>
        )
        } else {
            return (
                <div className='sectionItem'>
                    <div className='pointer'></div>
                    <input type='button' className='navBarBtn btn' id={name} name={name} onClick={handleClick}/>
                    <label htmlFor={name} className='label'>{name}</label>
                </div>
            )
        }
}

export default NavBarSections;

import React from 'react';
import '../NavBar/NavBar.css';

interface INavBarSection {
    name: string;
}

function NavBarSections({name}: INavBarSection) {

//   const [isActive, setIsActive] = useState(false);
//   const handleClick = event => {
//     setIsActive(current => !current);
//     isActive class
//   };

    function handleClick(event: { currentTarget: { classList: { toggle: (arg0: string) => any; }; }; }) {
        console.log(event.currentTarget)
        return event.currentTarget.classList.toggle('selectedButton');
    }

    return (
            <div className='sectionItem'>
                <div className='pointer selected'></div>
                <input type='button' className='navBarBtn btn' id={name} name={name} onClick={handleClick}/>
                <label htmlFor={name} className='label selectedLabel'>{name}</label>
            </div>
    )
}

export default NavBarSections;

// selected selectedButton selectedLabel
import '../NavBar/NavBar.css';
import '../Panel/Panel.css';

interface IClassName {
    className: string;
}

function Gradient({className}: IClassName): JSX.Element | null {
    if (className === 'gradientOne') { 
        return (
            <div className='gradient gradientOne'></div>
        )
    } else if( className === 'gradientTwo'){
        return (
            <div className='gradient gradientTwo'></div>
        )
    } else {
        return null
    }
}

export default Gradient;

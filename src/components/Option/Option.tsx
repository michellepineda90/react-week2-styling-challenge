import '../NavBar/NavBar.css';

interface IOption {
    name: string;
}

function Option({name}: IOption) {
    
    return (
        <div className='option'>
            <input type='button' className='options btn' id={name} name={name}/>
            <label htmlFor={name}>{name}</label>
        </div>
    )
}

export default Option;

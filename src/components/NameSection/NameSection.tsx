import '../Panel/Panel.css';

interface IProfile {
    name: string;
}

function NameSection({name} : IProfile) {  
    return (
        <div className='nameSection'>
            <div className='btns'>
                <input type='button' className='btn btnPanel' />
                <input type='button' className='btn btnPanel' />
            </div>
            <div className='name'>
                <p className='regularTxt'>{name}</p>
                <div className='profilePic'></div>
            </div>
        </div>
    ) 
}

export default NameSection;

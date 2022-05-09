import '../Main/Main.css';

interface IFiles {
    files: number
}

function CircleDetail({files} : IFiles) {   
    if (files < 3) {
        return (
            <div className='circles'>
                <div className='circle floor'></div>
                <div className='circle middle'></div>
            </div>
        )
    } else {
        return (
            <div className='circles'>
                <div className='circle floor'></div>
                <div className='circle middle'></div>
                <div className='circle withText ceil'>
                    <p className='plusFiles'>+3</p>
                </div>
            </div>
        )
    }
}

export default CircleDetail;

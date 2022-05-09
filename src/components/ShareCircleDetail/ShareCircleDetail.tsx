import '../Main/Main.css';

interface IShareCircle {
    files: number;
}

function ShareCircleDetail({files} : IShareCircle) {
    if (files < 3) {
        return (
            <div className='circles'>
                <div className='circle aquaBorder one'></div>
                <div className='circle magentaBorder two'></div>
            </div>
        )
    } else {
        return (
            <div className='circles'>
                <div className='circle aquaBorder one'></div>
                <div className='circle magentaBorder two'></div>
                <div className='circle orangeBorder three'></div>
            </div>
        )
    }
}

export default ShareCircleDetail;

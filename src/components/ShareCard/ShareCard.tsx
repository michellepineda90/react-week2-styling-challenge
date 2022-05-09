import '../Main/Main.css';
import ShareCircleDetail from '../ShareCircleDetail/ShareCircleDetail';


interface IShareCard {
    title: string;
    date: string;
    files: number;
}

function ShareCard({title, date, files} : IShareCard) {
    return (
        <div className='shareCard'>
            <div className='cardIcons'>
                <div className='square orange share'></div>
                <ShareCircleDetail files={files} />
            </div>
            <div className='cardDetails'>
                <p className='regularTxt noMargin'>{title}</p>
                <p className='detailFont noMargin'>{`Created: ${date}`}</p>
            </div>
        </div>
    )
}

export default ShareCard;

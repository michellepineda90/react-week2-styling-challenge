import '../Main/Main.css';
import CircleDetail from '../CircleDetail/CircleDetail';

interface IRecentCard {
    name: string;
    date: string;
    files: number;
}

function RecentProjectsCard({name, date, files}: IRecentCard) {
    return (
        <div className='card'>
            <div className='cardIcons'>
                <div className='cube'>
                    <div className='square bottom'></div>
                    <div className='square superposed'></div>
                </div>
                <CircleDetail files={files} />
                <div className='ellipsis vertical'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
            </div>
            <div className='cardDetails'>
                <p className='regularTxt noMargin'>{name}</p>
                <p className='detailFont'>{`Created: ${date}`}</p>
            </div>
        </div>
    )
}

export default RecentProjectsCard;

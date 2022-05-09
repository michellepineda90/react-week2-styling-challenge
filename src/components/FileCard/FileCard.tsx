import '../Main/Main.css';

interface IFileCard {
    title: string;
    members: number;
    date: string;
    color: string;
}

function FileCard({title, members, date, color} : IFileCard) {
    return (
        <div className='fileCard'>
            <div className={`smallSquare ${color}`}></div>
            <p className='title'>{title}</p>
            <p className='members txtColor'>{`${members} members`}</p>
            <p className='fileTxt txtColor'>{date}</p>
            <div className='ellipsis horizontal'>
                <div className='dot'></div>
                <div className='dot'></div> 
                <div className='dot'></div>
            </div>
        </div>
    )
}

export default FileCard;

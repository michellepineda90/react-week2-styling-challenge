import '../Panel/Panel.css';

interface IStorageDetail {
    title: string;
    files: number;
    gigabytes: number;
    color: string;
}

function StorageDetail({title, files, gigabytes, color}: IStorageDetail) {  
    return (
        <><div className='storageDetail'>
            <div className={`medSquare ${color}`}></div>
            <div className='text'>
                <p className='smallFont dark'>{title}</p>
                <p className='detailFont file'>{`${files} files`}</p>
            </div>
            <div className='gbDetail'>
                <p className='detailFont dark'>{`${gigabytes} GB`}</p>
            </div>
        </div><hr className='lineThree' /></>
    ) 
}

export default StorageDetail;

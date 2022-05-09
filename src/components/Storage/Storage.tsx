import '../Panel/Panel.css';
import StorageDetail from '../StorageDetail/StorageDetail';

function Storage() {
    const files = [
        { title:'Documents', files: 720, gigabytes: 200, color: 'orange' },
        { title: 'Documents', files: 720, gigabytes: 125, color: 'blue' },
        { title: 'Documents', files: 720, gigabytes: 75, color: 'aqua' },
        { title: 'Documents', files: 720, gigabytes: 50, color: 'gray'},
    ]  

    return (
        <div className='storage'>
            {files.map((file) => (
                <StorageDetail
                    title={file.title}
                    files={file.files}
                    gigabytes={file.gigabytes}
                    color={file.color}
                />
            ))}
        </div>
    ) 
}

export default Storage;

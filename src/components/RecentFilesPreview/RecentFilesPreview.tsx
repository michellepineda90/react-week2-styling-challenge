import '../Main/Main.css';
import FileCard from '../FileCard/FileCard';

function RecentFilesPreview() {
    const files = [
        { title:'Travel Landing Page', members: 5, date: 'Mar 8, 2020', color: 'orange' },
        { title: 'True Photos', members: 12, date: 'Mar 8, 2020', color: 'aqua' },
        { title: 'Dashboard Structure', members: 10, date: 'Mar 9, 2020', color: 'magenta'},
        { title: 'Character Illustration', members:3, date: 'Mar 10, 2020', color: 'orange' },
    ]

    return (
        <div className='recentFilesPreview'>
            <div className='tableHeader'>
                <p className='nameTitle txtColor'>Name</p>
                <p className='membersTitle txtColor'>Members</p>
                <p className='lastModTitle txtColor'>Last Modified</p>
            </div>
            <div className='files'>
                {files.map((file) => (
                    <FileCard 
                        title={file.title} 
                        members={file.members} 
                        date={file.date} 
                        color={file.color}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecentFilesPreview;

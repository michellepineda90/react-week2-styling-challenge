import '../Main/Main.css';
import ShareCard from '../ShareCard/ShareCard';

function ShareFilesPreview() {
    const files = [
        { title:'Landing Page', date: '20.02.2020', files: 2 },
        { title: 'Illustration Pack', date: '20.02.2020', files: 3 },
        { title: 'CV Design', date: '20.02.2020', files: 2},
    ]

    return (
        <div className='shareWithMeFiles'>
            {files.map((file) => (
                <ShareCard 
                    title={file.title}
                    date={file.date}
                    files={file.files}
                />
            ))}
        </div>
    )
}

export default ShareFilesPreview;

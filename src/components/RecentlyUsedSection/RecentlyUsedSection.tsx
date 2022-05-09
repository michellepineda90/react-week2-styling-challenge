import '../Main/Main.css';
import RecentlyUsedProjects from '../RecentlyUsedProjects/RecentlyUsedProjects';

function RecentlyUsedSection() {
    return (
        <div className='recentlyUsed section'>
            <div className='sectionHeader'>
                <p className='headerTitle'>Recently Used</p>
                <div className='btns'>
                    <input type='button' className='btn isActive' />
                    <input type='button' className='btn' />
                    <RecentlyUsedProjects />
                </div>
            </div>
        </div>
    )
}

export default RecentlyUsedSection;

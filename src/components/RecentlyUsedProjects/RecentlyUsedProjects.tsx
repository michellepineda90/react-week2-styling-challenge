import '../Main/Main.css';
import RecentProjectsCard from '../RecentProjectsCard/RecentProjectsCard';

function RecentlyUsedProjects() {
    const recentProjects = [
        { name: 'App Project', date: '20.02.2020', files: 2 },
        { name: 'Project: fitbit', date: '28.02.2020', files: 2},
        { name: 'Client Documents', date: '4.03.2020', files: 3},
    ]

    return (
        <div className='recentlyUsedProjects'>
            {recentProjects.map((project) => (
                <RecentProjectsCard 
                    key={project.name} 
                    name={project.name}
                    date={project.date} 
                    files={project.files}
                />
            ))}
        </div>
    )
}

export default RecentlyUsedProjects;

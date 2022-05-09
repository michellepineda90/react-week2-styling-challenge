import '../Main/Main.css';

interface ISectionHeader {
    title: string;
}

function SectionHeader({title}: ISectionHeader) {
    return (
        <div className='sectionHeader'>
            <p className='headerTitle'>{title}</p>
            <p className='regularTxt noMargin'>View All</p>
        </div>
    )
}

export default SectionHeader;

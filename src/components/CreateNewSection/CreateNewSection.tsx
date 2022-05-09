import '../NavBar/NavBar.css';

function CreateNewSection() {
    const createNewSectionBtn = {
        buttonText: 'Create New',
        linkText: '+'
    }
    
    return (
        <div className='createNewSection'>
            <div className='orangeBtn'>
                <p className='btnTxt'>{createNewSectionBtn.buttonText}</p>
                <a href="" className='plus'>{createNewSectionBtn.linkText}</a>
            </div>
        </div>
    )
}

export default CreateNewSection;

import '../Panel/Panel.css';

interface IBuySpace {
    message: string;
    subtitle: string;
    btnText: string;
    className: string;
}

function BuySpaceSection({message, subtitle, btnText, className}: IBuySpace) {
    return (
        <div className='buyMoreSpaceSection'>
            <div className={`gradient ${className}`}></div>
            <div className='text'>
                <p className='regularTxt'>{message}</p>
                <p className='detailFont premium'>{subtitle}</p>
            </div>
            <a href="" className='orangeBtn'>{btnText}!</a>
        </div>
    );
}
  
export default BuySpaceSection;

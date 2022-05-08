import React from 'react';
import './Panel.css';

function Panel() {
    return (
        <div className='panel'>
            <div className='nameSection'>
                <div className='btns'>
                    <input type='button' className='btn btnPanel' />
                    <input type='button' className='btn btnPanel' />
                </div>
                <div className='name'>
                    <p className='regularTxt'>Name</p>
                    <div className='profilePic'></div>
                </div>
            </div>
            <hr className='lineTwo'></hr>
            <div className='storageSection'>
                <p className='headerTitle dark'>Storage</p>
                <div className='chartSection'>
                    <div className='chart'></div>
                    <p className='detailFont'>GB of used</p>
                </div>
                <div className='storage'>
                    <div className='storageDetail'>
                        <div className='medSquare orange'></div>
                        <div className='text'>
                            <p className='smallFont dark'>Documents</p>
                            <p className='detailFont file'>files</p>
                        </div>
                        <div className='gbDetail'>
                            <p className='detailFont dark'>GB</p>
                        </div>
                    </div>
                    <hr className='lineThree' />
                    <div className='storageDetail'>
                        <div className='medSquare blue'></div>
                        <div className='text'>
                            <p className='smallFont dark'>Documents</p>
                            <p className='detailFont file'>files</p>
                        </div>
                        <div className='gbDetail'>
                            <p className='detailFont dark'>GB</p>
                        </div>
                    </div>
                    <hr className='lineThree' />
                    <div className='storageDetail'>
                        <div className='medSquare aqua'></div>
                        <div className='text'>
                            <p className='smallFont dark'>Documents</p>
                            <p className='detailFont file'>files</p>
                        </div>
                        <div className='gbDetail'>
                            <p className='detailFont dark'>GB</p>
                        </div>
                    </div>
                    <hr className='lineThree' />
                    <div className='storageDetail'>
                        <div className='medSquare gray'></div>
                        <div className='text'>
                            <p className='smallFont dark'>Documents</p>
                            <p className='detailFont file'>files</p>
                        </div>
                        <div className='gbDetail'>
                            <p className='detailFont dark'>GB</p>
                        </div>
                    </div>
                    <hr className='lineThree' />
                </div>
            </div>
            <div className='buyMoreSpaceSection'>
                <div className='colorGradientTwo'></div>
                <div className='text'>
                    <p className='regularTxt'>Buy more space now!</p>
                    <p className='detailFont premium'>Upgrade to cloud premium</p>
                </div>
                <a href="" className='orangeBtn'>Upgrade Account!</a>
            </div>
        </div>
    );
  }
  
  export default Panel;
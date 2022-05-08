import React from 'react';
import './Panel.css';

function Panel() {
    return (
        <div className='rectangleSix'>
            <div className=' nameSection'>
                <div className='btns'>
                    <input type='button' className='btn panel' />
                    <input type='button' className='btn panel' />
                </div>
                <p className='regularTxt'>Name</p>
                <div className='profilePic'></div>
            </div>
            <hr className='lineTwo'></hr>
            <div className='storageSection'>
                <p className='headerTitle'>Storage</p>
                <div className='chart'>
                    <p className='detailFont'>
                        GB of used
                    </p>
                </div>
                <div className='storage'>
                    <div className='storageDetail'>
                        <div className='medSquare orange'></div>
                        <div className='text'>
                            <p className='smallFont'>Documents</p>
                            <p className='detailFont'>files</p>
                        </div>
                        <div className='gbDetail'>
                            <p className='detailFont dark'>GB</p>
                        </div>
                    </div>
                    <hr />
                    <div className='storageDetail'>
                        <div className='medSquare blue'></div>
                        <div className='text'>
                            <p className='smallFont'>Documents</p>
                            <p className='detailFont'>files</p>
                        </div>
                        <div className='gbDetail'>
                            <p className='detailFont dark'>GB</p>
                        </div>
                    </div>
                    <hr />
                    <div className='storageDetail'>
                        <div className='medSquare aqua'></div>
                        <div className='text'>
                            <p className='smallFont'>Documents</p>
                            <p className='detailFont'>files</p>
                        </div>
                        <div className='gbDetail'>
                            <p className='detailFont dark'>GB</p>
                        </div>
                    </div>
                    <hr />
                    <div className='storageDetail'>
                        <div className='medSquare gray'></div>
                        <div className='text'>
                            <p className='smallFont'>Documents</p>
                            <p className='detailFont'>files</p>
                        </div>
                        <div className='gbDetail'>
                            <p className='detailFont dark'>GB</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className='buyMoreSpaceSection'>
                    <div className='colorGradientTwo'></div>
                    <div className='text'>
                        <p className='regularTxt'>Buy more space now!</p>
                            <p className='detailFont'>Upgrade to cloud premium</p>
                    </div>
                    <div className='orangeBtn'>Upgrade Account!</div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Panel;
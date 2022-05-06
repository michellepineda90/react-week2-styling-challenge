import React from 'react';
import './ColumnThree.css';

function ColumnThree() {
    return (
        <div className='rectangleSix'>
            <div className='rectangleSeven nameSection'>
                <div className='btns'>
                    <input type='button' className='btn' />
                    <input type='button' className='btn' />
                </div>
                <p>Name</p>
                <div className='profilePic'></div>
            </div>
            <hr></hr>
            <div className='rectangleSeven storageSection'>
                <p className='headerTitle'>Storage</p>
                <div>Chart
                    <div>
                        GBs used
                    </div>
                </div>
                <div className='rectangleSeven storage'>
                    <div className='rectangleSeven storageDetail'>
                        <div className='rectangleSeven'>color</div>
                            <div className='text'>
                                <p>Documents</p>
                                <p>files</p>
                            </div>
                            <div>GB</div>
                    </div>
                    <div className='rectangleSeven storageDetail'>
                        <div className='rectangleSeven'>color</div>
                            <div className='text'>
                                <p>Documents</p>
                                <p>files</p>
                            </div>
                            <div>GB</div>
                    </div>
                    <div className='rectangleSeven storageDetail'>
                        <div className='rectangleSeven'>color</div>
                            <div className='text'>
                                <p>Documents</p>
                                <p>files</p>
                            </div>
                            <div>GB</div>
                    </div>
                    <div className='rectangleSeven storageDetail'>
                        <div className='rectangleSeven'>color</div>
                            <div className='text'>
                                <p>Documents</p>
                                <p>files</p>
                            </div>
                            <div>GB</div>
                    </div>
                </div>
                <div className='rectangleSeven buyMoreSpaceSection'>
                    <div className='colorGradientTwo'></div>
                    <div className='text'>
                        <p>Buy more space now!</p>
                            <p>Upgrade to cloud premium</p>
                    </div>
                    <div className='orangeBtn'>Upgrade Account!</div>
                </div>
            </div>
        </div>
    );
  }
  
  export default ColumnThree;
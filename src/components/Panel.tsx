import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './Panel.css';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
    datasets: [
                { 
                    id: 1,
                    label: 'Percentage of storage used',
                    data: [75, 200, 50, 125],
                    backgroundColor: [
                    '#4AC29D',
                    '#FF9F00',
                    '#C4C4C4',
                    '#689FF8'
                    ],
                    borderRadius: 45,
                    borderColor: '#00000000',
                    spacing: 10,
                    cutout: 52,
                },
            ],
    // TODO: use options object from library to render detail
    // options: {
    //     elements: {
    //         center: {
    //             text: '85% used',
    //             color: '#FF6384',
    //             fontStyle: 'Roboto',
    //             sidePadding: 20,
    //             minFontSize: 25,
    //             lineHeight: 25,
    //         }
    //     }
    // }
};

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
                    <div className='chart'>
                        <Doughnut datasetIdKey='id' data={data} />
                        <div className='percentageSection'>
                            <p className='percentageFont'>85%</p>
                            <p className='subHeader'>Used</p>
                        </div>
                    </div>
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
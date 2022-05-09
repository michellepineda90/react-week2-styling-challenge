import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../Panel/Panel.css';
import Storage from '../Storage/Storage';

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

function StorageSection() {  
    const total = 500
    const used = data.datasets[0].data.reduce((previous, current) => previous + current)
    const percentageUsed = (used / total) * 100

    return (
        <div className='storageSection'>
            <p className='headerTitle dark'>Storage</p>
            <div className='chartSection'>
                <div className='chart'>
                    <Doughnut datasetIdKey='id' data={data} />
                    <div className='percentageSection'>
                        <p className='percentageFont'>{`${percentageUsed}%`}</p>
                        <p className='subHeader'>Used</p>
                    </div>
                </div>
                <p className='detailFont'>{`${used} GB of ${total} GB used`}</p>
            </div>
            <Storage />
        </div>
    ) 
}

export default StorageSection;

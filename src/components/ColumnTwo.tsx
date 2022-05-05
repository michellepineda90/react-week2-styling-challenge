import React from 'react';
import './ColumnTwo.css';

function ColumnTwo() {
    return (
        <div className='rectangleFour'>
            <div className='search'>
            <input type='button' className='searchBtn btn' />
                <input type='input' id='search' name='search' placeholder= 'Search' className='searchInput' />
            </div>
            <div className='recentlyUsed'>
                <div className='rectangleFive recentlyUsedHeader'>
                    <p className='headerTitle'>Recently Used</p>
                    <div className='btns'>
                        <input type='button' className='btn' />
                        <input type='button' className='btn' />
                    </div>
                </div>
                <div className='recentlyUsedProjects'>
                    <div className='card rectangleFive'>
                        <p className='cardHeader'>App Project</p>
                        <p className='detail'>Created</p>
                    </div>
                    <div className='card rectangleFive'> 
                        <p className='cardHeader'>Project: fitbit</p>
                        <p className='detail'>Created</p>
                    </div>
                    <div className='card rectangleFive'>
                        <p className='cardHeader'>Client Documents</p>
                        <p className='detail'>Created</p>
                    </div>
                </div>
            </div>   
            <div className='recentFiles'>
                <div className='rectangleFive recentFilesHeader'>
                    <p className='headerTitle'>Recent Files</p>
                    <p className='viewAll'>View All</p>
                </div>
                <div className='recentFilesPreview'>
                    <div>Name Members Last Modified</div>
                    <div className='rectangleFive card'>
                        <p className='cardHeader'>Travel Landing Page</p>
                    </div>
                    <div className='rectangleFive card'>
                        <p className='cardHeader'>True Photos</p>
                    </div>
                    <div className='rectangleFive card'>
                        <p className='cardHeader'>Dashboard Structure</p>
                    </div>
                    <div className='rectangleFive card'>
                        <p className='cardHeader'>Character Illustration</p>
                    </div>
                </div>
            </div>
            <div className='shareWithMe'>
                <div className='rectangleFive shareWithMeHeader'>
                    <p className='headerTitle'>Share with me</p>
                    <p className='viewAll'>View All</p>
                </div>
                <div className='rectangleFive shareWithMeFiles'>
                    <div className='rectangleFive cardHeader'>Landing Page</div>
                    <div className='rectangleFive cardHeader'>Illustration Pack</div>
                    <div className='rectangleFive cardHeader'>CV Design</div>
                </div>
            </div>
        </div>
    );
  }
  
  export default ColumnTwo;
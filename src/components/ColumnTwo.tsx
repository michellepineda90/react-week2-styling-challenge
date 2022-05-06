import React from 'react';
import './ColumnTwo.css';

function ColumnTwo() {
    return (
        <div className='main'>
            <div className='search'>
            <input type='button' className='searchBtn btn' />
                <input type='input' id='search' name='search' placeholder= 'Search' className='searchInput' />
            </div>
            <div className='recentlyUsed section'>
                <div className='sectionHeader'>
                    <p className='headerTitle'>Recently Used</p>
                    <div className='btns'>
                        <input type='button' className='btn' />
                        <input type='button' className='btn' />
                    </div>
                </div>
                <div className='recentlyUsedProjects'>
                    <div className='card'>
                        <p className='cardHeader'>App Project</p>
                        <p className='detail'>Created:</p>
                    </div>
                    <div className='card'> 
                        <p className='cardHeader'>Project: fitbit</p>
                        <p className='detail'>Created:</p>
                    </div>
                    <div className='card'>
                        <p className='cardHeader'>Client Documents</p>
                        <p className='detail'>Created:</p>
                    </div>
                </div>
            </div>   
            <div className='recentFiles section'>
                <div className='sectionHeader'>
                    <p className='headerTitle'>Recent Files</p>
                    <p>View All</p>
                </div>
                <div className='recentFilesPreview'>
                    <div className='fileTxt'>Name Members Last Modified</div>
                    <div className='files'>
                        <div className='fileCard'>
                            <div className='colorCode'></div>
                            <p className='title'>Travel Landing Page</p>
                            <p className='fileTxt'>members</p>
                            <p className='fileTxt'>date</p>
                            <div>...</div>
                        </div>
                        <div className='fileCard'>
                            <div className='colorCode'></div>
                            <p className='title'>True Photos</p>
                            <p className='fileTxt'>members</p>
                            <p className='fileTxt'>date</p>
                            <div>...</div>
                        </div>
                        <div className='fileCard'>
                            <div className='colorCode'></div>
                            <p className='title'>Dashboard Structure</p>
                            <p className='fileTxt'>members</p>
                            <p className='fileTxt'>date</p>
                            <div>...</div>
                        </div>
                        <div className='fileCard'>
                            <div className='colorCode'></div>
                            <p className='title'>Character Illustration</p>
                            <p className='fileTxt'>members</p>
                            <p className='fileTxt'>date</p>
                            <div>...</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shareWithMe section'>
                <div className='sectionHeader'>
                    <p className='headerTitle'>Share with me</p>
                    <p>View All</p>
                </div>
                <div className='shareWithMeFiles'>
                    <div className='shareCard'>
                        <p>Landing Page</p>
                        <p className='detail'>Created:</p>
                    </div>
                    <div className='shareCard'>
                        <p>Illustration Pack</p>
                        <p className='detail'>Created:</p>
                    </div>
                    <div className='shareCard'>
                        <p>CV Design</p>
                        <p className='detail'>Created:</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default ColumnTwo;
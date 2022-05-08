import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div className='navBar'>
            <div className='colorGradientOne'></div>
            <div className='sections'>
                <div className='home sctn'>
                    <div className='pointer selected'></div>
                    <div className='sectionItem'>
                        <input type='button' className='selectedButton navBarBtn btn' id='home' name='home'/>
                        <label htmlFor="home" className='selectedLabel label'>Home</label>
                    </div>
                </div>
                <div className='myFiles sctn'>
                    <div className='pointer'></div>
                    <div className='sectionItem'>
                        <input type='button' className='navBarBtn btn' id='myFiles' name='myFiles'/>
                        <label htmlFor="myFiles" className='label'>My Files</label>
                    </div>
                </div>
                <div className='recentFiles sctn'>
                    <div className='pointer'></div>
                    <div className='sectionItem'>
                        <input type='button' className='navBarBtn btn' id='recentFiles' name='recentFiles'/>
                        <label htmlFor="recentFiles" className='label'>Recent Files</label>
                    </div>
                </div>
                <div className='sharedFiles sctn'>
                    <div className='pointer'></div>
                    <div className='sectionItem'>
                        <input type='button' className='navBarBtn btn' id='sharedFiles' name='sharedFiles'/>
                        <label htmlFor="sharedFiles" className='label'>Shared Files</label>
                    </div>
                </div>
                <div className='fileRequest sctn'>
                    <div className='pointer'></div>
                    <div className='sectionItem'>
                        <input type='button' className='navBarBtn btn' id= 'fileRequest' name= 'fileRequest'/>
                        <label htmlFor= "fileRequest" className='label'>File Request</label>
                    </div>
                </div>
                <div className='trash sctn'>
                    <div className='pointer'></div>
                    <div className='sectionItem'>
                        <input type='button' className='navBarBtn btn' id='trash' name='trash'/>
                        <label htmlFor="trash" className='label'>Trash</label>
                    </div>
                </div>
            <hr className='lineOne'/>
            <div className='wrapper'>
                <div className='moreOptionsSection'>
                    <div className='option'>
                        <input type='button' className='options btn' id='uploadFiles' name='uploadFiles'/>
                        <label htmlFor="uploadFiles">Upload Files</label>
                    </div>
                    <div className='option'>
                        <input type='button' className='options btn' id='uploadFolder' name='uploadFolder'/>
                        <label htmlFor="uploadFolder">Upload Folder</label>
                    </div>
                    <div className='option'>
                        <input type='button' className='options btn' id='newFolder' name='newFolder'/>
                        <label htmlFor="newFolder">New Folder</label>
                    </div>
                    <div className='option'>
                        <input type='button' className='options btn' id='more' name='more'/>
                        <label htmlFor="more">More</label>
                    </div>
                </div>
                <div className='arrowDown'/></div>
            </div>
            <div className='createNewSection'>
                    <div className='orangeBtn'>
                        <p className='btnTxt'>Create New</p>
                        <a href="" className='plus'>+</a>
                    </div>
            </div>
        </div>
    );
  }
  
  export default NavBar;
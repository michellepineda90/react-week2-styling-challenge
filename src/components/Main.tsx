import './Main.css';
// import verticalEllipsis from '../assets/verticalEllipsis.svg';
// import horizontalEllipsis from '../assets/horizontalEllipsis.svg';

function Main() {
    return (
        <div className='main'>
            {/* search section */}
            <div className='search'>
                <input type='button' className='searchBtn btn' />
                <input type='input' id='search' name='search' placeholder= 'Search' className='searchInput' />
            </div>
            {/* recently used section */}
            <div className='recentlyUsed section'>
                <div className='sectionHeader'>
                    <p className='headerTitle'>Recently Used</p>
                    <div className='btns'>
                        <input type='button' className='btn isActive' />
                        <input type='button' className='btn' />
                    </div>
                </div>
                <div className='recentlyUsedProjects'>
                    <div className='card'>
                        <div className='cardIcons'>
                            <div className='cube'>
                                <div className='square bottom'></div>
                                <div className='square superposed'></div>
                            </div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='ellipsis vertical'>
                                <div className='dot'></div>
                                <div className='dot'></div>
                                <div className='dot'></div>
                            </div>
                        </div>
                        <div className='cardDetails'>
                            <p className='regularTxt noMargin'>App Project</p>
                            <p className='detailFont'>Created:</p>
                        </div>
                    </div>
                    <div className='card'> 
                        <div className='cardIcons'>
                            <div className='cube'>
                                <div className='square bottom'></div>
                                <div className='square superposed'></div>
                            </div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='ellipsis vertical'>
                                <div className='dot'></div>
                                <div className='dot'></div>
                                <div className='dot'></div>
                            </div>
                        </div>
                        <div className='cardDetails'>
                            <p className='regularTxt noMargin'>Project: fitbit</p>
                            <p className='detailFont'>Created:</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='cardIcons'>
                            <div className='cube'>
                                <div className='square bottom'></div>
                                <div className='square superposed'></div>
                            </div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='ellipsis vertical'>
                                <div className='dot'></div>
                                <div className='dot'></div>
                                <div className='dot'></div>
                            </div>
                        </div>
                        <div className='cardDetails'>
                            <p className='regularTxt noMargin'>Client Documents</p>
                            <p className='detailFont'>Created:</p>
                        </div>
                    </div>
                </div>
            </div>   
            {/* recent files section */}
            <div className='rcntFiles section'>
                <div className='sectionHeader'>
                    <p className='headerTitle'>Recent Files</p>
                    <p className='regularTxt noMargin'>View All</p>
                </div>
                <div className='recentFilesPreview'>
                    <div className='tableHeader'>
                        <p className='nameTitle txtColor'>Name</p>
                        <p className='membersTitle txtColor'>Members</p>
                        <p className='lastModTitle txtColor'>Last Modified</p>
                    </div>
                    <div className='files'>
                        <div className='fileCard'>
                            <div className='smallSquare orange'></div>
                            <p className='title'>Travel Landing Page</p>
                            <p className='members txtColor'>members</p>
                            <p className='fileTxt txtColor'>date</p>
                            <div className='ellipsis horizontal'>
                                <div className='dot'></div>
                                <div className='dot'></div>
                                <div className='dot'></div>
                            </div>
                        </div>
                        <div className='fileCard'>
                            <div className='smallSquare aqua'></div>
                            <p className='title'>True Photos</p>
                            <p className='members txtColor'>members</p>
                            <p className='fileTxt txtColor'>date</p>
                            <div className='ellipsis horizontal'>
                                <div className='dot'></div>
                                <div className='dot'></div>
                                <div className='dot'></div>
                            </div>
                        </div>
                        <div className='fileCard'>
                            <div className='smallSquare magenta'></div>
                            <p className='title'>Dashboard Structure</p>
                            <p className='members txtColor'>members</p>
                            <p className='fileTxt txtColor'>date</p>
                            <div className='ellipsis horizontal'>
                                <div className='dot'></div>
                                <div className='dot'></div>
                                <div className='dot'></div>
                            </div>
                        </div>
                        <div className='fileCard'>
                            <div className='smallSquare orange'></div>
                            <p className='title'>Character Illustration</p>
                            <p className='members txtColor'>members</p>
                            <p className='fileTxt txtColor'>date</p>
                            <div className='ellipsis horizontal'>
                                <div className='dot'></div>
                                <div className='dot'></div>
                                <div className='dot'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* share section */}
            <div className='shareWithMe section'>
                <div className='sectionHeader'>
                    <p className='headerTitle'>Share with me</p>
                    <p className='regularTxt noMargin'>View All</p>
                </div>
                <div className='shareWithMeFiles'>
                    <div className='shareCard'>
                        <div className='cardIcons'>
                            <div className='square orange share'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                        </div>
                        <div className='cardDetails'>
                            <p className='regularTxt noMargin'>Landing Page</p>
                            <p className='detailFont'>Created:</p>
                        </div>
                    </div>
                    <div className='shareCard'>
                        <div className='cardIcons'>
                            <div className='square orange share'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                        </div>
                        <div className='cardDetails'>
                            <p className='regularTxt noMargin'>Illustration Pack</p>
                            <p className='detailFont'>Created:</p>
                        </div>
                    </div>
                    <div className='shareCard'>
                        <div className='cardIcons'>
                            <div className='square orange share'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                        </div>
                        <div className='cardDetails'>
                            <p className='regularTxt noMargin'>CV Design</p>
                            <p className='detailFont'>Created:</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Main;
import React from 'react';
import MainView from '../containers/container_mainview.js';
import Menu from '../containers/container_menu.js';

const AppContent = (props) => {
    return (
        <div className="container">
            <Menu />
            <MainView />            
        </div>
    );
}

AppContent.propTypes = {
    content: React.PropTypes.object
}
         
export default AppContent;
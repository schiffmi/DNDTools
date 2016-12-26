import React from 'react';
import MainView from '../containers/container_mainview.js';

const AppContent = (props) => {
    return (
        <div className="container body">
            <MainView />            
        </div>
    );
}

AppContent.propTypes = {
    content: React.PropTypes.object
}
         
export default AppContent;
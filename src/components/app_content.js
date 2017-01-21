import React from 'react';
import MainView from '../containers/container_mainview.js';

const AppContent = (props) => {
    return (
        <div className="container-fluid">
            <MainView />
        </div>
    );
};

AppContent.propTypes = {
    content: React.PropTypes.object
};

export default AppContent;

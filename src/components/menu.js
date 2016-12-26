import React from 'react';


const Menu = (props) => {
    const { currentView, views, chooseView } = props;

    const navItems = views.map(view => {
        let active = currentView.id === view.id;
        return ( <li key={view.id} className={ 'tab-item' + (active ? ' active' : '') }><a href="#" onClick={() => chooseView(view.id)} >{ view.title }</a></li> );
    });

    return (
        <div className="menu">
            <ul className="tab tab-block">
                { navItems }
            </ul>
        </div>
    );
}

export default Menu;
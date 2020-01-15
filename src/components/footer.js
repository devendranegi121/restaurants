import React, { Component } from 'react';
import Submenu from './subMenu'

class footer extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        if (this.props.categorys) {
            var footerItem = this.props.categorys.map((d, i) => {
                return (
                    <div className='col-12 col-sm-6 col-md-4  pt-4 pb-4 ' key={i}>

                        <h4 className="h5"> {d.name}</h4>

                        <Submenu typemenu="footerMenu" items={d.menuItems} id={`navbarDropdownMenuLink_${d.id}`} />

                    </div>
                )
            })
        }
        return (
            <footer className="bg-light inline">
                <div className="container">
                    <div className='row align-items-start'>
                        {footerItem}
                    </div>
                </div></footer>
        );
    }
}

export default footer;
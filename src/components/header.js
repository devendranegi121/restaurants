import React, { Component } from 'react';
import Submenu from './subMenu'

class header extends Component {
    constructor(props) {
        super(props);
       
    } 
    render() { 
        if (this.props.categorys) {
            var menuItem = this.props.categorys.map((d, i) => {
                return (
                    <li className={`nav-item dropdown id_${d.id}`} key={i}>

                        <a className="nav-link dropdown-toggle" key={d.id} href="#" id={`navbarDropdownMenuLink_${d.id}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            {d.name}</a>
                            <div className="dropdown-menu" aria-labelledby={this.props.id}>
                        <Submenu items={d.menuItems} id={`navbarDropdownMenuLink_${d.id}`} typemenu="dropdown-item" />
                        </div>

                    </li>
                )
            })
        }
        return (

            <div className="navbar navbar-expand-lg navbar-light bg-light ">
               

                <div className="container">
                    <a className="navbar-brand" href="#">{this.props.brandName}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav mr-auto">
                            {menuItem}
                        </ul>
                    </div>
                </div></div>
        );
    }
}

export default header;
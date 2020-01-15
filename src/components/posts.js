import React, { Component } from 'react';
import PostItems from './postItems'
class posts extends Component {

    constructor(props) {
        super(props);
      
    }
    render() {
        //console.log(this.props.categorys)
        if (this.props.categorys) {
            var menuItem = this.props.categorys.map((d, i) => {
                
                return (
                    <div className="mt-5" key={i}>
                        <h2 className="h4">{d.name}</h2>
                        <PostItems items={d.menuItems}  searchDataItem={this.props.searchDataItem}  />
                    </div>

                )
            })
        }
        return (

            <div className="row">
                {menuItem}
            </div>
        );
    }
}

export default posts;
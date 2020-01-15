import React, { Component } from 'react';

class postItems extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
       // console.log(this.props.items)
        var postItem = this.props.items.map((d, i) => {
            var name=d.name.toLowerCase();
            if (name.indexOf(this.props.searchDataItem) > -1) {
            console.log(d.name)
            console.log(this.props.searchDataItem)
            return (
                <div className="col-12 col-sm-6 col-md-4  mb-4" id={d.id} key={d.id}>
                    <div className="border p-0 h-100">
                        <img src={`https://picsum.photos/400/300?random=${d.id}`} className="img-fluid" alt="" />
                        <div className="p-3">
                        <h3 className="h5 pt-2">{d.name}</h3>
                        <p className="dic_h50">{d.description}</p>
                        <div className="row">
                            <div className="col-6 text-success">Price {d.subItems[0].price}</div><div className="col-6"><button className="btn btn-primary">Buy now</button></div>
                        </div></div></div>
                </div>
            )
            }
        })
        return (
            <div className="row">
                {postItem}
            </div>
        );
    }
}

export default postItems;
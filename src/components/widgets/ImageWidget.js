import React from "react";

const ImageWidget = (
    {
        editing=this.props.editing,
        widget=this.props.widget,
        deleteWidget=this.props.deleteWidget,
        updateWidget=this.props.updateWidget,
        okWidget=this.props.okWidget,
        preview=this.props.preview,
    }) =>
    <div>
        <h3>Image widgets
                <span className="pull-right">
                        <a href="#" className="btn btn-warning">
                        <i className="fa fa-arrow-up"></i></a>
                        <a href="#" className="btn btn-warning">
                        <i className="fa fa-arrow-down"></i></a>
                <select onChange={(event) => updateWidget({
                    ...widget,
                    type: event.target.value
                })}>
                    <option>List</option>
                    <option>image</option>
                    value={widget.type}
                </select>
                    <a href="#"
                       className="btn btn-danger"
                       onClick={()=>deleteWidget(widget.id)}
                    >
                        <i className="fa fa-trash"></i></a>
                    </span>
            </h3>

        <input
            className="form-control"
            placeholder="http://icons.iconarchive.com/icons/aroche/delta/256/File-JPG-icon.png"
            onChange={(event) => updateWidget({
                ...widget,
                text: event.target.value
            })}
            value={widget.url}
        />
        <input placeholder="Widget Name"
               className="form-control"
               onChange={(event) => updateWidget({
                   ...widget,
                   name: event.target.value
               })}
               value={widget.name}
        /><button onClick={() => okWidget(widget)}>
        Ok
    </button>
        {{preview}&&
        <div>
            <h5>Preview</h5>
            <img className="fit-picture"
                 src={widget.url}
                 />
        </div>
        }
        {!{preview}&&
        <h3>We have preview off</h3>
        }
    </div>

export default ImageWidget

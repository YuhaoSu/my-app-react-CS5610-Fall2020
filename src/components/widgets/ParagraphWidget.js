import React from "react";

const ParagraphWidget = (
    {
        editing=this.props.editing,
        widget=this.props.widget,
        deleteWidget=this.props.deleteWidget,
        updateWidget=this.props.updateWidget,
        okWidget=this.props.okWidget,
    }) =>
    <div>
        <h3>Paragraph widgets
                <span className="pull-right">
                        <a href="#" className="btn btn-warning">
                        <i className="fa fa-arrow-up"></i></a>
                        <a href="#" className="btn btn-warning">
                        <i className="fa fa-arrow-down"></i></a>
                <select onChange={(event) => updateWidget({
                    ...widget,
                    type: event.target.value
                })}>
                    <option>HEADING</option>
                    <option>PARAGRAPH</option>
                    value={widget.type}
                </select>
                    <a href="#"
                       className="btn btn-danger"
                       onClick={()=>deleteWidget(widget.id)}
                    >
                        <i className="fa fa-trash"></i></a>
                    </span>
            </h3>

        <textarea
            className="form-control"
            onChange={(event) => updateWidget({
                ...widget,
                text: event.target.value
            })}
            value={widget.text}
        />
        <input placeholder="Name"
               className="form-control"
               onChange={(event) => updateWidget({
                   ...widget,
                   name: event.target.value
               })}
               value={widget.name}
        /><button onClick={() => okWidget(widget)}>
        Ok
    </button>
    </div>

export default ParagraphWidget

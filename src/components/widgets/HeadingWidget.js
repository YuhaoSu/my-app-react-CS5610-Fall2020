import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css"

const HeadingWidget = (
    {
        editing=this.props.editing,
        widget=this.props.widget,
        deleteWidget=this.props.deleteWidget,
        updateWidget=this.props.updateWidget,
        okWidget=this.props.okWidget,
        preview=this.props.preview,
    }) =>
    <div>
        {{editing}&&
        <div>
            <h3>Heading widgets
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

            <span>
            <input className="form-control"
                   placeholder="Heading Text"
                   onChange={(event) => updateWidget({
                       ...widget,
                       text: event.target.value
                   })}
                   value={widget.text}
            />
            <select className="form-control" >
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
                <option>Heading 4</option>
                <option>Heading 5</option>
            </select>
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
            </span>

        </div>}
        {
            !{editing} &&
            <div>
                {
                    widget.size === 1 &&
                    <h1>{widget.text}</h1>
                }
                {
                    widget.size === 2 &&
                    <h2>{widget.text}</h2>
                }
                {
                    widget.size === 3 &&
                    <h3>{widget.text}</h3>
                }
            </div>
        }
        {{preview}&&
        <h3>We have preview on</h3>
        }
        {!{preview}&&
        <h3>We have preview off</h3>
        }
    </div>

export default HeadingWidget

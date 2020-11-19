import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css"

const HeadingWidget = (
    {
        widgets,
        widget,
        deleteWidget,
        updateWidget,
        editing,
        moveUpWidget,
        moveDownWidget,
        index,


    }) =>
    <div>
        {editing&&
        <div>
            <h3>Heading widget
                <span >
                    <button
                        onClick={()=>deleteWidget(widget.id)}
                        className="btn btn-danger  float-md-right" aria-hidden="true">
                        <i className="fa fa-trash">
                        </i>
                    </button>

                    <select className="float-md-right"
                            onChange={(event)=>updateWidget({
                                ...widget,
                                type: event.target.value
                            })}
                            value={widget.type}>
                        <option value={"HEADING"}>HEADING </option>
                        <option value={"PARAGRAPH"}>PARAGRAPH </option>
                        {/*<option value={"List"}>List </option>*/}
                        {/*<option value={"image"}>image </option>*/}
                    </select>

                    <button
                        style={{display: index !== widgets.length-1
                                ? 'block':'none'}}
                        onClick={()=>moveDownWidget(widgets.splice(index+1, 0, widgets.splice(index,1)[0]))}
                        className="btn btn-warning  float-md-right" aria-hidden="true">
                        <i className="fa fa-arrow-down"></i>
                    </button>

                    <button
                        style={{display: index !== 0
                                ? 'block':'none'}}
                        onClick={()=>moveUpWidget(widgets.splice(index-1, 0, widgets.splice(index, 1)[0]))}
                        className="btn btn-warning  float-md-right" aria-hidden="true">
                        <i className="fa fa-arrow-up"></i>
                    </button>
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
            <select className="form-control"
                    onChange={(event)=> updateWidget({
                        ...widget,
                        size: parseInt(event.target.value)
                    })}
                    value={widget.size}
            >
                <option value={1}>Heading 1</option>
                <option value={2}>Heading 2</option>
                <option value={3}>Heading 3</option>
                <option value={4}>Heading 4</option>
                <option value={5}>Heading 5</option>
                <option value={6}>Heading 6</option>
            </select>
            <input placeholder="Name"
                   className="form-control"
                   onChange={(event) => updateWidget({
                       ...widget,
                       name: event.target.value
                   })}
                   value={widget.name}
            />
            </span>
            <div>
            {
                widget.size === 1 &&
                <h1 className="text-left">
                    Preview
                    <br/>
                    {widget.text}
                </h1>
            }
            {
                widget.size === 2 &&
                <h2 className="text-left">
                    Preview
                    <br/>
                    {widget.text}
                </h2>            }
            {
                widget.size === 3 &&
                <h3 className="text-left">
                    Preview
                    <br/>
                    {widget.text}
                </h3>
            }
            {
                widget.size === 4 &&
                <h4 className="text-left">
                    Preview
                    <br/>
                    {widget.text}
                </h4>
            }
            {
                widget.size === 5 &&
                <h5 className="text-left">
                    Preview
                    <br/>
                    {widget.text}
                </h5>
            }
            {
                widget.size === 6 &&
                <h6 className="text-left">
                    Preview
                    <br/>
                    {widget.text}
                </h6>
            }
            </div>

        </div>}
        {
            !editing &&
            <div>
                {
                    widget.size === 1 &&
                    <h1 className="text-left">
                        Preview
                        <br/>
                        {widget.text}
                    </h1>
                }
                {
                    widget.size === 2 &&
                    <h2 className="text-left">
                        Preview
                        <br/>
                        {widget.text}
                    </h2>            }
                {
                    widget.size === 3 &&
                    <h3 className="text-left">
                        Preview
                        <br/>
                        {widget.text}
                    </h3>
                }
                {
                    widget.size === 4 &&
                    <h4 className="text-left">
                        Preview
                        <br/>
                        {widget.text}
                    </h4>
                }
                {
                    widget.size === 5 &&
                    <h5 className="text-left">
                        Preview
                        <br/>
                        {widget.text}
                    </h5>
                }
                {
                    widget.size === 6 &&
                    <h6 className="text-left">
                        Preview
                        <br/>
                        {widget.text}
                    </h6>
                }
            </div>
        }
    </div>

export default HeadingWidget

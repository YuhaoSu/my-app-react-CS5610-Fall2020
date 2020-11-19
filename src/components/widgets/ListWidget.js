import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css"

const ListWidget = (
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
        {editing &&
        <div>
            <h3>List widget
                <span>
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
                        <option value={"LIST"}>LIST </option>
                        <option value={"IMAGE"}>IMAGE</option>
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
            <textarea
                id = "items"
                className="form-control"
                placeholder="Enter one list item per line"
                onChange={(event) => updateWidget({
                    ...widget,
                    // items: event.target.value.replace(/\n/g,"<br/>")
                    items: event.target.value

                })}
                value={widget.items}
            />
            <select className="form-control"
                    onChange={(event)=>updateWidget({
                ...widget,
                ordered: event.target.value
            })}
                    value={widget.ordered}>
                <option value={true}>Ordered List</option>
                <option value={false}>Unordered List</option>
            </select>
                {console.log(widget.ordered)}


            <input placeholder="Widget name"
                   className="form-control"
                   onChange={(event) => updateWidget({
                       ...widget,
                       name: event.target.value
                   })}
                   value={widget.name}
            />
            </span>
            <div>
                {/*{console.log(widget.items)}*/}
                {/*{console.log(widget.items.replace(/\n/g,"<br/>"))}*/}
                { widget.ordered &&
                    <div>
                        {
                            widget.size === 1 &&
                            <h1 className="text-left">
                                Preview
                                <br/>
                                {widget.items}
                            </h1>
                        }
                        {
                            widget.size === 2 &&
                            <h2 className="text-left">
                                Preview
                                <br/>
                                {widget.items}
                            </h2>            }
                        {
                            widget.size === 3 &&
                            <h3 className="text-left">
                                Preview
                                <br/>
                                {widget.items}
                            </h3>
                        }
                        {
                            widget.size === 4 &&
                            <h4 className="text-left">
                                Preview
                                <br/>
                                {widget.items}
                            </h4>
                        }
                        {
                            widget.size === 5 &&
                            <h5 className="text-left">
                                Preview
                                <br/>
                                {widget.items}
                            </h5>
                        }
                        {
                            widget.size === 6 &&
                            <h6 className="text-left">
                                Preview
                                <br/>
                                {widget.items}
                            </h6>
                        }
                    </div>
                }
                { !widget.ordered &&
                <div>
                    {
                        widget.size === 1 &&
                        <h1 className="text-left">
                            Unordered Preview
                            <br/>
                            {widget.items}
                        </h1>
                    }
                    {
                        widget.size === 2 &&
                        <h2 className="text-left">
                            Unordered Preview
                            <br/>
                            {widget.items}
                        </h2>            }
                    {
                        widget.size === 3 &&
                        <h3 className="text-left">
                            Unordered Preview
                            <br/>
                            {widget.items}
                        </h3>
                    }
                    {
                        widget.size === 4 &&
                        <h4 className="text-left">
                            Unordered Preview
                            <br/>
                            {widget.items}
                        </h4>
                    }
                    {
                        widget.size === 5 &&
                        <h5 className="text-left">
                            Unordered Preview
                            <br/>
                            {widget.items}
                        </h5>
                    }
                    {
                        widget.size === 6 &&
                        <h6 className="text-left">
                            Unordered Preview
                            <br/>
                            {widget.items}
                        </h6>
                    }
                </div>
                }
            </div>

        </div>}
        {
            !editing &&
            <div>
                {/*{console.log(widget.items)}*/}
                {/*{console.log(widget.items.replace(/\n/g,"<br/>"))}*/}
                { widget.ordered &&
                <div>
                    {
                        widget.size === 1 &&
                        <h1 className="text-left">
                            Preview
                            <br/>
                            {widget.items}
                        </h1>
                    }
                    {
                        widget.size === 2 &&
                        <h2 className="text-left">
                            Preview
                            <br/>
                            {widget.items}
                        </h2>            }
                    {
                        widget.size === 3 &&
                        <h3 className="text-left">
                            Preview
                            <br/>
                            {widget.items}
                        </h3>
                    }
                    {
                        widget.size === 4 &&
                        <h4 className="text-left">
                            Preview
                            <br/>
                            {widget.items}
                        </h4>
                    }
                    {
                        widget.size === 5 &&
                        <h5 className="text-left">
                            Preview
                            <br/>
                            {widget.items}
                        </h5>
                    }
                    {
                        widget.size === 6 &&
                        <h6 className="text-left">
                            Preview
                            <br/>
                            {widget.items}
                        </h6>
                    }
                </div>
                }
                { !widget.ordered &&
                <div>
                    {
                        widget.size === 1 &&
                        <h1 className="text-left">
                            Unordered Preview
                            <br/>
                            {widget.items}
                        </h1>
                    }
                    {
                        widget.size === 2 &&
                        <h2 className="text-left">
                            Unordered Preview
                            <br/>
                            {widget.items}
                        </h2>            }
                    {
                        widget.size === 3 &&
                        <h3 className="text-left">
                            Unordered Preview
                            <br/>
                            {widget.items}
                        </h3>
                    }
                    {
                        widget.size === 4 &&
                        <h4 className="text-left">
                            Unordered Preview
                            <br/>
                            {widget.items}
                        </h4>
                    }
                    {
                        widget.size === 5 &&
                        <h5 className="text-left">
                            Unordered Preview
                            <br/>
                            {widget.items}
                        </h5>
                    }
                    {
                        widget.size === 6 &&
                        <h6 className="text-left">
                            Unordered Preview
                            <br/>
                            {widget.items}
                        </h6>
                    }
                </div>
                }
            </div>
        }

    </div>

export default ListWidget

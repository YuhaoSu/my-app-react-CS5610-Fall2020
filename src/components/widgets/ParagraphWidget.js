import React from "react";

const ParagraphWidget = (
    {
        editing,
        widgets,
        widget,
        deleteWidget,
        updateWidget,
        moveUpWidget,
        moveDownWidget,
        index,
    }) =>
    <div>
        {editing &&
            <div>
        <h3>Paragraph widget
            <span>
                    <button
                        onClick={() => deleteWidget(widget.id)}
                        className="btn btn-danger  float-md-right" aria-hidden="true">
                        <i className="fa fa-trash">
                        </i>
                    </button>

                    <select className="float-md-right"
                            onChange={(event) => updateWidget({
                                ...widget,
                                type: event.target.value
                            })}
                            value={widget.type}>
                        <option value={"HEADING"}>HEADING </option>
                        <option value={"PARAGRAPH"}>PARAGRAPH </option>
                        <option value={"LIST"}>LIST </option>
                        <option value={"IMAGE"}>IMAGE </option>
                    </select>

                    <button
                        style={{
                            display: index !== widgets.length - 1
                                ? 'block' : 'none'
                        }}
                        onClick={() => moveDownWidget(widgets.splice(index + 1, 0, widgets.splice(index, 1)[0]))}
                        className="btn btn-warning  float-md-right" aria-hidden="true">
                        <i className="fa fa-arrow-down"></i>
                    </button>

                    <button
                        style={{
                            display: index !== 0
                                ? 'block' : 'none'
                        }}
                        onClick={() => moveUpWidget(widgets.splice(index - 1, 0, widgets.splice(index, 1)[0]))}
                        className="btn btn-warning  float-md-right" aria-hidden="true">
                        <i className="fa fa-arrow-up"></i>
                    </button>
                </span>
        </h3>
            <br/>
            <textarea
            className="form-control"
            placeholder="Paragraph text"
            onChange={(event) => updateWidget({
            ...widget,
            text: event.target.value
        })}
            value={widget.text}
            />
            <br/>
            <input placeholder="Name"
            className="form-control"
            onChange={(event) => updateWidget({
            ...widget,
            name: event.target.value
        })}
            value={widget.name}
            />
            <br/>
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
            </div>
        }
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

export default ParagraphWidget

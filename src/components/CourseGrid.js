import React from "react";
import "./CourseManagerStyle.css"
import "./CoruseGridStyle.css"
import CourseManagerComponent from "./CourseRow";
import CourseCard from "./CourseCard";

export default class CourseTableComponent extends CourseManagerComponent{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-4">
                        <h5 className="wbdv-header wbdv-title ">Recent documents</h5>
                    </div>
                    <div className="col-4">
                        <h5 className="wbdv-header wbdv-title ">Owned by me</h5>
                    </div>
                    <div className="col-2">
                        <i
                        className="fa fa-th wbdv-button wbdv-grid-layout"
                        onClick={this.props.showingTable}
                        aria-hidden="true">
                        </i>
                    </div>
                    <div className="col-2">
                        <i className="fa fa-sort-alpha-asc wbdv-header wbdv-sort" aria-hidden="true"></i>

                    </div>

                </div>

                <div className="row">
                    {
                        this.props.courses.map(course =>
                            <CourseCard
                                key={course._id}
                                ref="cardId"
                                deleteCourse={this.props.deleteCourse}
                                course={course}/>
                        )
                    }
                </div>
            </div>

        )
    }

}

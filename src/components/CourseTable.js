import React from "react";
import CourseRow from "./CourseRow";
import CourseManagerComponent from "./CourseRow";
import "./CourseManagerStyle.css"
import "./CourseTableStyle.css"

export default class CourseTable extends CourseManagerComponent{

    render(){
        return(
            <div className='table-responsive'>
        <table className="table">
            <thead>
            <tr>
                <th className="wbdv-header wbdv-title ">Title</th>
                <th className="wbdv-header wbdv-owner">Owner</th>
                <th className="wbdv-header wbdv-last-modified">Last Modified</th>
                <th>
                    <i
                        className="fa fa-th wbdv-button wbdv-grid-layout"
                        onClick={this.props.showingGrid}
                        aria-hidden="true">
                    </i>
                </th>
                <th><i className="fa fa-sort-alpha-asc wbdv-header wbdv-sort" aria-hidden="true"></i></th>

            </tr>
            </thead>
                {
                    this.props.courses.map(course =>
                        <CourseRow
                            deleteCourse={this.props.deleteCourse}
                            course={course}/>
                    )
                }
            </table>
            </div>

        )
    }

}
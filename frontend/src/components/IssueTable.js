import React from "react";
import IssueRow from "./IssueRow";
import "../styling/IssueTable.css"

class IssueTable extends React.Component {
    render() {
        return (

            <table style={{ border: 1 }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Due Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.issues.map((issue, index) =>
                        (<IssueRow issue={issue} key={index} />))}
                </tbody>
            </table>
        )
    }
}
export default IssueTable;
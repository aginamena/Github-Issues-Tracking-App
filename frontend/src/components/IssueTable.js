import React from "react";
import IssueRow from "./IssueRow";
import "../styling/IssueTable.css"

class IssueTable extends React.Component {
    render() {
        const issues = [
            {
                id: 1,
                status: "New",
                owner: "Ravan",
                effort: 5,
                "created": new Date(),
                due: undefined,
                title: "Error in console when clicking Add"
            },
            {
                id: 2,
                status: "Assigned",
                owner: "Eddie",
                effort: 14,
                created: new Date(),
                due: new Date(),
                title: "Missing bottom border on panel"
            }
        ]
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
                    {issues.map(issue =>
                        (<IssueRow issue={issue} key={issue.id} />))}
                </tbody>
            </table>
        )
    }
}
export default IssueTable;
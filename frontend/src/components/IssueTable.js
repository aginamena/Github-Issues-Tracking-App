import React from "react";
import IssueRow from "./IssueRow";
import "../styling/IssueTable.css"

const initialState = [
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
const sampleIssue = {
    status: "New",
    owner: "Pieta",
    title: "completion date should be optional"
}
class IssueTable extends React.Component {

    // constructor() {
    //     super();
    //     this.state = { issues: [] }
    //     setTimeout(() => this.createIssue(sampleIssue), 2000);
    //     setTimeout(() => this.createIssue(sampleIssue), 3000);
    // }
    // componentDidMount() {
    //     this.setState({ issues: initialState })
    //     // setTimeout(() => this.setState(sampleIssue), 300);
    // }
    // createIssue(issue) {
    //     issue.id = this.state.issues.length + 1;
    //     issue.created = new Date();
    //     const newIssueList = [...this.state.issues, issue];
    //     this.setState({ issues: newIssueList });
    // }
    // console.log(this);
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
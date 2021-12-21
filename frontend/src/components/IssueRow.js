import React from "react";

class IssueRow extends React.Component {
    render() {
        const { id, status, owner, created, effort, due, title } = this.props.issue;
        console.log(this);
        return (
            // <div>{this.props.issue_title}
            // </div>
            <tr>
                <th>{id}</th>
                <th>{status}</th>
                <th>{owner}</th>
                <th>{created.toDateString()}</th>
                <th>{effort}</th>
                <th>{due ? due.toDateString() : ""}</th>
                <th>{title}</th>
            </tr>
        )
    }
}
export default IssueRow;
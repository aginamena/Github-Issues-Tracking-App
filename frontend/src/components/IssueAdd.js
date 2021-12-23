import React from "react";

const sampleIssue = {
    status: "New",
    owner: "Pieta",
    title: "completion date should be optional"
}

class IssueAdd extends React.Component {
    constructor() {
        super();
        setTimeout(() => this.props.createIssue(sampleIssue), 2000)
    }
    render() {
        return (
            <div>Issues add</div>
        )
    }
}
export default IssueAdd;
import React from 'react'
import IssueTable from './IssueTable';

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
class IssueList extends React.Component {
    constructor() {
        super();
        this.state = { issues: [] }
        setTimeout(() => this.createIssue(sampleIssue), 2000);
        setTimeout(() => this.createIssue(sampleIssue), 3000);
    }
    createIssue(issue) {
        issue.id = this.state.issues.length + 1;
        issue.created = new Date();
        const newIssueList = [...this.state.issues, issue];
        this.setState({ issues: newIssueList });
    }
    componentDidMount() {
        this.setState({ issues: initialState })
    }
    // useEffect(() => {
    //     setIssues(initialState);
    //     setTimeout(() => createIssue(sampleIssue), 2000);
    //     setTimeout(() => createIssue(sampleIssue), 3000);
    // }, [])
    render() {
        return (
            <div>
                <IssueTable issues={this.state.issues} />
            </div>
        )
    }

}

export default IssueList

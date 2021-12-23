import React from 'react'
import IssueTable from './IssueTable';


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

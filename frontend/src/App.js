
import './App.css';
import IssueAdd from './components/IssueAdd';
import IssueFilter from './components/IssueFilter';
import IssueTable from './components/IssueTable';
import React from "react";
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
class App extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] }
    this.createIssue = this.createIssue.bind(this);
    setTimeout(this.createTestIssue, 2000);
  }
  componentDidMount() {
    this.loadDate();
  }
  createTestIssue() {
    this.createIssue({
      status: "New",
      owner: "Pieta",
      title: "completion date should be optional"
    })
  }
  loadDate() {
    setTimeout(() => this.state({ issues: initialState }), 2000)
  }
  createIssue(issue) {
    issue.id = this.state.issues.length + 1;
    issue.created = new Date();
    const newIssueList = [...this.state.issues, issue];
    this.setState({ issues: newIssueList });
  }
  render() {
    return (
      <>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <button onClick={this.createTestIssue}>Add</button>
      </>
    )
  }
}


export default App;

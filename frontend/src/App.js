
import './App.css';
import IssueAdd from './components/IssueAdd';
import IssueFilter from './components/IssueFilter';
import IssueTable from './components/IssueTable';

function App() {
  return (
    <div className="App">
      <IssueFilter />
      <IssueTable />
      <IssueAdd />
    </div>
  );
}

export default App;

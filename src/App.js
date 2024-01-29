import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React! <br/>
          This app is hosted with AWS Elastic Beanstalk and AWS CodePipeline.
        </p>
      </header>
    </div>
  );
}

export default App;

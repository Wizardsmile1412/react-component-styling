import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="primaryButton"/>
        <Button type="secondaryButton"/>
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="error"/>
        <Alert type="warning"/>
        <Alert type="info"/>
        <Alert type="success"/>
      </div>
    </div>
  );
}

export default App;

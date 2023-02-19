import logo from './logo.svg';
import './App.css';
import Iframe from 'react-iframe'

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
      <Iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDE2azxPIwWVo8mXRxwpXob%2FUntitled%3Fnode-id%3D12%253A69%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D12%253A69%26show-proto-sidebar%3D1" allowfullscreen></Iframe>
      </header>
    </div>
  );
}

export default App;

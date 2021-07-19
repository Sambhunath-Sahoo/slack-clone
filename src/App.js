import './App.css';
import Header from './component/header/Header';
import Sidebar from './component/sidebar/Sidebar';

function App() {
  return (
    <div className="app">

      <Header />
      <div className="app__body">
        <Sidebar />        
        {/* react-router -> chat screen */}
      </div>
    </div>
  );
}

export default App;

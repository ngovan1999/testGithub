import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/topmenu/TopMenu';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <TopMenu/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import CreatePostCard from './Components/CreatePostCard/CreatePostCard';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <div className="views-container">
        <CreatePostCard></CreatePostCard>
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;

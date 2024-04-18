import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav id='navbar'>
            <h1>Art Website</h1>
            <h2>A Trustworthy Place to Submit Your Art</h2>
        </nav>
      </header>
      <main>
      <div>
            <p>Submit your image here</p>
            <input type='file' required='' name='submit'></input>
      </div>
      </main>
    </div>
  );
}
function imagePost(imgSrc, id){
  return(
    <div>
      <image src={imgSrc}/>
      <p>This is Post {id}</p>
    </div>
  )
}
export default App;

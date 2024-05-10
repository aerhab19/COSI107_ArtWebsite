import './App.css';
import { useState } from 'react';
//simport {Card, Button} from 'react-bootstrap';

function App() {
  const [uploadedImgPath,setImgPath] = useState('');

  function updateImgPath(e){
    console.log(e.target.value)
  }
  function resetImgPath(){
    setImgPath('');
  }
  function submitImagePost(imgSrc){

  }

  function imagePost(imgSrc, id){
    return(
      <div class='container'>
        <h2>This is Post {id}</h2>no
        <div class='content'>
          <img clas='img' src={imgSrc}/>
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      <header id='artHeader'>
        
            <h2>Art Website</h2>
            <h3>A Trustworthy Place to Submit Your Art</h3>
     
      </header>
      <main id='artMainBody'>

        <div id='submitBoxContainer' class='container'>
          {/*actual submit form*/}
          <div id='submitBox'>
              <h3>Submit your image here</h3>
              <div>
                <h4>Requirements</h4>
                <ul>
                  <li>Must be this </li>
                </ul>
              </div>
              <form>
                <div id='uploadfile'>
                    <input type='file' 
                    value={uploadedImgPath}
                    onChange={updateImgPath}
                    accept='image/png, image/jpg, image/wbep' 
                    />
                </div>
                <div>
                  <input type='button'
                  //onClick={submitImagePost(uploadedImgPath)}
                  value='Submit Your Art! <3'/>
                </div>
              </form>
          </div>

        </div>
        <section id='postDisplay'> 
          
        </section>
      </main>
    </div>
  );
}


export default App;

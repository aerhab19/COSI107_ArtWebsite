import './App.css';
import { useState, useEffect } from 'react';
import ImagePostTemplate from './imagePostTemplate';


function App() {

  const [imgPostArr, setImgPostArr] = useState([]);

  /*
  function submitImagePost(imgSrc){
    const head = imgSrc.split('.').pop();
    fetch('/uploadImg',{
      method: 'POST',
      headers:{
        'Content-Type' : 'image/'+head,
      },
      body: imgSrc
    }).then(res => {
        
        console.log(mgSrc+'\n'+res.status)
    })
  }*/

  
  useEffect(()=>{
    fetch('/showAll',
    {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setImgPostArr(data)
    })
    },[]);


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
              <form action='/uploadImg' method='POST' encType="multipart/form-data" id='uploadfile'>
                    <input type='file' 
                      name='imgInput'
                      onInput={(e)=>{
                        
                        console.log(e.target.files[0].name+' submitted')  
                      }}
                      accept='.png, .jpg, .webp' 
                    />
                  <input type='submit'
                  value='Submit Your Art! <3'/>
              </form>
          </div>

        </div>
        <section id='postDisplay'> 
       <ImagePostTemplate imageURL='images\\Loonwatermark.webp'/>
          {
           imgPostArr.map(imgPost =>{
            return (
              <ImagePostTemplate 
              id={imgPost.id}
              imageURL={imgPost.imageURL}
              />
            )}
          )
            
          }
        </section>
      </main>
    </div>
  );
}


export default App;

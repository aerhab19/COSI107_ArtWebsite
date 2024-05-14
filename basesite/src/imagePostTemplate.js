export default function ImagePostTemplate({id, imageURL}){
    let idNum = ''
    if (typeof id == 'number'){
        idNum = id;
        console.log(id+' '+imageURL+'\n')
    }
    return(
      <div class='post'>
        <img class='postImg' src={imageURL}/>
        <p>{'post '+idNum }</p>
        
      </div>
    )
  }
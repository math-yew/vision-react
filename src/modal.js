import React, { useState, useEffect } from 'react';

import Pexpic from './pexpic';
import Libpic from './libpic';
import Service from './service';

export default function Modal (props) {
  let dummy = "https://www.downloadclipart.net/large/chip-png-pic.png";
  let blankPhotos = [{src:{tiny:'',medium:''}}];
  blankPhotos[0].src.tiny = dummy ;
  blankPhotos[0].src.medium = dummy ;
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState(blankPhotos);

    // Service.getPexelPics()
    // .then((p)=>setPhotos(p[0].id));

    function searchPhotos(){
      Service.getPexelPics(search)
      .then(res=>{
        console.log("photoArr: " + JSON.stringify(res));
        // addSome(res);
        setPhotos(res);
      });
    }

    function addPic(pic){
      let data = Service.getData();
      let photos = data[props.boardId].photos;
      if(props.id < 0){
        photos.push(pic);
      } else{
        photos.splice(props.id, 1, pic);
      }
      data[props.boardId].photos = photos;
      Service.setData(data);
    }

  return(
    <div className="modal">
      <p onClick={props.exit}>X</p>
      <p>{props.boardId} Modal ID {props.id}</p>
      <p>Modal photo {photos[0].src.photo}</p>
      <p>Search: {search}</p>

      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
      <button onClick={()=>searchPhotos()}>Search</button>
      {true ? photos.map((u,i)=><Pexpic action={()=>addPic(u.src.medium)} key={i} url={u.src.tiny}/>) : <p>empty</p>}
      {/*}<p>{JSON.stringify(photos[1].id)}</p>*/}
    </div>
  )
}

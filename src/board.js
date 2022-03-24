import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Pic from './pic';
import Modal from './modal';
import Service from './service';

export default function Board (props) {

    let {id} = useParams();
    console.log("id: " + id);
    const [board, setBoard] = useState(Service.getData(id));
    const [showModal, setShowModal] = useState(false);
    const [picId, setPicId] = useState(0);
    const [height, setHeight] = useState("100px");

    function picSize(){
      let wide = window.innerWidth*.9 - 20;
      let high = window.innerHeight*.38 - 20;
      let picNumber = board.photos.length;

      let average = Math.sqrt(wide*high/picNumber)*.79;
      setHeight(Math.round(average) + "px");
    }

    // picSize();

    function getModal(i){
      console.log("getModal!" + i);
      setPicId(i);
      setShowModal(true);
    }

    return(
      <div>
      <Link to={"/boards"}>Back</Link>
        <p>{board.name}</p>
        <div className="boardView" onClick={()=>picSize()}>
          {board.photos.map((u,i)=><Pic height={height} action={()=>getModal(i)}  key={i} url={u}/>)}
        </div>
        <button onClick={()=>getModal(-1)}>Add Picture</button>
        {showModal ? <Modal id={picId} boardId={id} exit={()=>setShowModal(false)}/> : null}
      </div>
    )
}

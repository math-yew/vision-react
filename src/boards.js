import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Pic from './pic';
import Service from './service';

export default function Boards (props) {


  const [boards, setBoards] = useState(Service.getData());

  function addBoard() {
    boards.push(Service.blankBoard);
    Service.setData(boards);
    setBoards(Service.getData());
    console.log("addBoard");
  }

  return(
    <div>
      <p>Boards</p>
      {boards.map((b,i)=><Link to={"/board/"+i} key={i} >{b.name}</Link>)}
      <button onClick={addBoard}>Add Board</button>
    </div>
  )
}

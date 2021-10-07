import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '수원 초밥 맛집'])
  let [따봉, 따봉변경] = useState(0,0,0);

  let [modal, modalC] = useState(false);
  let [누른제목 , 누른제목변경] = useState(0);

  


  let posts = '강남 고기 맛집';

  function 변경(){
     var a = [...글제목];
     a[0] = '여자 코트 추천';
     글제목변경(a);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={변경}>버튼</button>
   
      {
        글제목.map(function(a,i){
          return(
            <div className='list'>
              <h3 onClick={ ()=>{누른제목변경(i)} }> {a} <span onClick={()=>{따봉변경(따봉+1)}}>❤{따봉}</span></h3>
              <p>10월 7일 발행</p>
              <hr/>
            </div>
          )
        })
        
      }

      {/* <button onClick={ ()=>{누른제목변경(0)} }>버튼1</button>
      <button onClick={ ()=>{누른제목변경(1)} }>버튼2</button>
      <button onClick={ ()=>{누른제목변경(2)} }>버튼3</button> */}

      <button onClick={()=>{ modalC(!modal)}}>버튼</button>
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }
      

    </div>

  );
}

function Modal(props){
  return(
    <div className="modal">
      <h2> { props.글제목[props.누른제목] } </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;

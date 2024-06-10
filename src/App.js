import React from 'react';



const App = () => {
  return(
    <div className='App'>
      <div className='results'>

      </div>
      <div className='reset-div'>
        <button id='ac-button'>AC</button>
        <button id='subtract-button'>/</button>
        <button id='multiply-button'>*</button>
      </div>
      <div className="top-numbers-div">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
      </div>
      <div className="middle-numbers-div">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
      </div>
      <div className="second-middle-numbers-div">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>%</button>
      </div>
      <div className="bottom-numbers-div">
        <button className='zero'>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </div>
  )
}


export default App;
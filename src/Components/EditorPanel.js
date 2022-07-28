import React from 'react';

const EditorPanel = () => {
     return (
          <div className='editor-panel'>
               <div className="filter">
                    <label className="title">Filters</label>
                    <div className="options">
                         <button id="brightness" className="active">Brightness</button>
                         <button id="saturation">Saturation</button>
                         <button id="inversion">Inversion</button>
                         <button id="grayscale">Grayscale</button>
                    </div>
                    <div className="slider">
                         <div className="filter-info">
                              <p className="name">Brightness</p>
                              <p className="value">100%</p>
                         </div>
                         <input type="range" defaultValue="100" min="0" max="200" />
                    </div>
               </div>
               <div className="rotate">
                    <label className="title">Rotate & Flip</label>
                    <div className="options">
                         <button id="left"><i className='bx bx-rotate-left icon-size'></i></button>
                         <button id="right"><i className='bx bx-rotate-right icon-size'></i></button>
                         <button id="horizontal"><i className='bx bx-reflect-vertical icon-size2'></i></button>
                         <button id="vertical"><i className='bx bx-reflect-horizontal icon-size2'></i></button>
                    </div>
               </div>
          </div>
     );
};

export default EditorPanel;
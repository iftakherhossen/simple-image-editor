import React from 'react';

const Controls = ({ loadImage, resetFilter, saveImage, handleClick }) => {
     return (
          <div className='controls'>
               <button className='reset-filter' onClick={resetFilter}>Reset Filters</button>
               <div className='row'>                    
                    <button className='choose-img' onClick={handleClick}>
                         <input type='file' accept='image/*' onChange={loadImage} className='file-input' hidden />
                         Choose Image
                    </button>                    
                    <button className='save-img' onClick={saveImage}>Save Image</button>
               </div>
          </div>
     );
};

export default Controls;
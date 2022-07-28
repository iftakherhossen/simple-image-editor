import React from 'react';

const Controls = ({ loadImage, resetFilter, saveImage }) => {
     return (
          <div className='controls'>
               <button className='reset-filter' onClick={resetFilter}>Reset Filters</button>
               <div className='row'>
                    <button className='choose-img'>
                         <label
                              htmlFor='myInput'                              
                         >
                              Choose Image
                         </label>
                         <input
                              id='myInput'
                              className='file-input'
                              style={{ display: 'none' }}
                              type={'file'}
                              accept='image/*'
                              onChange={loadImage}
                         />
                    </button>
                    <button className='save-img' onClick={saveImage}>Save Image</button>
               </div>
          </div>
     );
};

export default Controls;
import React from 'react';

const ImagePreview = ({ image }) => {
     return (
          <div className="preview-img">
               {
                    image ? <img src={image} alt='preview-img' draggable='false'  /> : <img src='image-placeholder.svg' alt="preview-img" draggable='false' />
               }
          </div>
     );
};

export default ImagePreview;
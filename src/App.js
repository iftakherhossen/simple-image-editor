import { useEffect, useState } from 'react';
import './App.css';
import Controls from './Components/Controls';
import EditorPanel from './Components/EditorPanel';
import ImagePreview from './Components/ImagePreview';

const App = () => {
  const [image, setImage] = useState();
  const [name, setName]= useState('');
  
  const fileInput = document.querySelector(".file-input"), filterOptions = document.querySelectorAll(".filter button"), filterName = document.querySelector(".filter-info .name"), filterValue = document.querySelector(".filter-info .value"), filterSlider = document.querySelector(".slider input"), rotateOptions = document.querySelectorAll(".rotate button"), previewImg = document.querySelector(".preview-img img"), chooseImgBtn = document.querySelector(".choose-img");

  let brightness = "100", saturation = "100", inversion = "0", grayscale = "0";
  let rotate = 0, flipHorizontal = 1, flipVertical = 1;

  const loadImage = e => {
    const [file] = e.target.files;
    setImage(URL.createObjectURL(file));
    setName(file.name);
  };

  const applyFilter = () => {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
  } ;
  
  filterOptions.forEach(option => {
    option.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      option.classList.add("active");
      filterName.innerText = option.innerText;

      if(option.id === "brightness") {
        filterSlider.max = "200";
        filterSlider.value = brightness;
        filterValue.innerText = `${brightness}%`;
      } 
      else if(option.id === "saturation") {
        filterSlider.max = "200";
        filterSlider.value = saturation;
        filterValue.innerText = `${saturation}%`
      } 
      else if(option.id === "inversion") {
        filterSlider.max = "100";
        filterSlider.value = inversion;
        filterValue.innerText = `${inversion}%`;
      } 
      else {
        filterSlider.max = "100";
        filterSlider.value = grayscale;
        filterValue.innerText = `${grayscale}%`;
      }
    });
  });

  const updateFilter = () => {
    filterValue.innerText = `${filterSlider.value}%`;
    const selectedFilter = document.querySelector(".filter .active");
    if(selectedFilter.id === "brightness") {
      brightness = filterSlider.value;
    } 
    else if(selectedFilter.id === "saturation") {
      saturation = filterSlider.value;
    } 
    else if(selectedFilter.id === "inversion") {
      inversion = filterSlider.value;
    } 
    else {
      grayscale = filterSlider.value;
    }
    applyFilter();
  };

  rotateOptions.forEach(option => {
    option.addEventListener("click", () => {
      if(option.id === "left") {
        rotate -= 90;
      } 
      else if(option.id === "right") {
        rotate += 90;
      } 
      else if(option.id === "horizontal") {
        flipHorizontal = flipHorizontal === 1 ? -1 : 1;
      } 
      else {
        flipVertical = flipVertical === 1 ? -1 : 1;
      }
      applyFilter();
    });
  });

  const resetFilter = () => {
    brightness = "100"; saturation = "100"; inversion = "0"; grayscale = "0";
    rotate = 0; flipHorizontal = 1; flipVertical = 1;
    filterOptions[0].click();
    applyFilter();
  }

  const saveImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;
    
    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if(rotate !== 0) {
        ctx.rotate(rotate * Math.PI / 180);
    }
    ctx.scale(flipHorizontal, flipVertical);
    ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    
    const link = document.createElement("a");
    link.download = `${name}.jpg`;
    link.href = canvas.toDataURL();
    link.click();
  }

  image && filterSlider.addEventListener("input", updateFilter);

  const handleClick = e => {
    if (chooseImgBtn || fileInput) {
      chooseImgBtn.addEventListener("click", () => fileInput.click());
    }    
  }

  return (
    <div className={`container ${image || 'disable'}`}>
      <h2>Simple Image Editor</h2>
      <div className='wrapper'>
        <EditorPanel />  
        <ImagePreview image={image} />
      </div>
      <Controls loadImage={loadImage} resetFilter={resetFilter} saveImage={saveImage} handleClick={handleClick} />
    </div>
  );
}

export default App;
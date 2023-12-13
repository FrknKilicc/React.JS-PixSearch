import ImageItem from "./ImageItem";
import '../App.css'

function ImageList({ imagesPlaceHolder }) {
  return <div className="image-list">
    {imagesPlaceHolder.map((images,index)=>{
       return <ImageItem images={images} key={index} />
    })}</div>;

}

export default ImageList;

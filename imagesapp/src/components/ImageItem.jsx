function ImageItem({images}) {
    console.log(images);
    return ( 
    <div>
        <img className="img-list" src={images.urls.small} alt={images.alt_description} />
    </div>
     );
}

export default ImageItem;
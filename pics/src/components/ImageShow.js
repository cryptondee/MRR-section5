import "../css/imageShow.css";
function ImageShow({ image }) {
  return (
    <div>
      <p>{image.description}</p>
      <img
        className="small"
        src={image.urls.full}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageShow;

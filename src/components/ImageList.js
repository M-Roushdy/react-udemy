import "./ImageList.css";
import ShowImage from "./ShowImage";

function ImageList({images}){

    const renderedImages = images.map((image)=>{
        return <div key={image.id}>
            <ShowImage  image={image} />
            </div>
    })
    return (
    <div className="image-list">
        {renderedImages}
    </div>);
};

export default ImageList;
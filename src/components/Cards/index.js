import './style.css';

function Cards({ images }) {

  // move this to a hook
  const handleSaveImage = (href, title) => {
    const imageToSave = {
      href,
      title
    }

    console.log(imageToSave)

    const storedImages = window.localStorage.getItem("saved_images")

    console.log(JSON.parse(storedImages))

    if(!storedImages) {
        return window.localStorage.setItem("saved_images", JSON.stringify([imageToSave]))
    }
    const parsedStoredImages = JSON.parse(storedImages)

    const objectToInsert = [
        ...parsedStoredImages,
        imageToSave
    ]
    
    window.localStorage.setItem("saved_images", JSON.stringify(objectToInsert))
  }
  return (
    <div>
        {images.map( (image, index) => (
          <div key={index}>
            <img src={image.links[0].href} alt={image.data[0].title}/>
            <div>
              <span>{image.data[0].title}</span>
              <button onClick={() => handleSaveImage(
                image.links[0].href,
                image.data[0].title
              )}>Download</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cards;

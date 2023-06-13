import { useState } from 'react';
import images from './imagesArray';

function App() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [isKeywordsVisible, setIsKeywordsVisible] = useState(true);

  const handleImageClick = (image) => {
    const imageIndex = selectedImages.findIndex((img) => img.id === image.id);
    if (imageIndex === -1) {
      setSelectedImages((prevImages) => [...prevImages, image]);
      setSelectedKeywords((prevKeywords) => [
        ...prevKeywords,
        ...image.keywords,
      ]);
    } else {
      setSelectedImages((prevImages) =>
        prevImages.filter((img) => img.id !== image.id)
      );
      setSelectedKeywords((prevKeywords) =>
        prevKeywords.filter(
          (keyword) => !image.keywords.some((kw) => kw.name === keyword.name)
        )
      );
    }
  };

  const handleTitleClick = (image) => {
    const imageIndex = selectedImages.findIndex((img) => img.id === image.id);
    if (imageIndex === -1) {
      setSelectedImages((prevImages) => [...prevImages, image]);
      setSelectedKeywords((prevKeywords) => [
        ...prevKeywords,
        ...image.keywords,
      ]);
    } else {
      setSelectedImages((prevImages) =>
        prevImages.filter((img) => img.id !== image.id)
      );
      setSelectedKeywords((prevKeywords) =>
        prevKeywords.filter(
          (keyword) => !image.keywords.some((kw) => kw.name === keyword.name)
        )
      );
    }
  };

  const handleKeywordsVisibility = () => {
    setIsKeywordsVisible(!isKeywordsVisible);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-8">Choisissez ce que vous aimez</h1>

      {/*BUTTON */}
      <button
        onClick={handleKeywordsVisibility}
        className="mb-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
      >
        {isKeywordsVisible ? 'Cacher les mots-clés' : 'Voir les mots-clés'}
      </button>

      {/*KEYWORDS */}
      {isKeywordsVisible && (
        <div className="flex flex-wrap justify-center">
          {selectedKeywords.map((keyword) => (
            <div
              key={keyword.id}
              className="keyword m-2 px-3 py-1 bg-green-500 text-white rounded-full"
            >
              {keyword.name}
            </div>
          ))}
        </div>
      )}

      {/*IMAGES */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.url}
              alt={image.name}
              className={`h-48 object-cover rounded-md aspect-video cursor-pointer transition duration-500 ease-in-out transform ${
                selectedImages.some(
                  (selectedImage) => selectedImage.id === image.id
                )
                  ? 'border-solid border-4 border-green-500'
                  : ''
              }`}
              onClick={() => handleImageClick(image)}
            />
            <div
              className={`absolute top-0 left-0 w-full rounded-md h-full bg-black bg-opacity-50 text-white flex items-center justify-center px-4 cursor-pointer transition duration-500 ease-in-out transform ${
                selectedImages.some(
                  (selectedImage) => selectedImage.id === image.id
                )
                  ? 'border-solid border-4 border-green-500'
                  : ''
              }`}
              onClick={() => handleTitleClick(image)}
            >
              {image.name}
            </div>
          </div>
        ))}
      </div>


    </main>
  );
}

export default App;
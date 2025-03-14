import React from 'react';

interface Image {
  url: string;
  alt: string;
  id: string;
}

interface ImageGalleryProps {
  images: Image[];
  onSelect?: (image: Image) => void;
  onDelete?: (imageId: string) => void;
  selectable?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onSelect,
  onDelete,
  selectable = false
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative group"
        >
          <img
            src={image.url}
            alt={image.alt}
            className={`w-full h-48 object-cover rounded-lg ${selectable ? 'cursor-pointer' : ''}`}
            onClick={() => selectable && onSelect && onSelect(image)}
          />
          {onDelete && (
            <button
              onClick={() => onDelete(image.id)}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Delete image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
            {image.alt}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
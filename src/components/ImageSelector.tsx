import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import ImageUploader from './ImageUploader';

interface Image {
  url: string;
  alt: string;
  id: string;
}

interface ImageSelectorProps {
  images: Image[];
  onSelect: (image: Image) => void;
  onUpload: (file: File) => Promise<Image>;
  onDelete: (imageId: string) => Promise<void>;
  selectedImageId?: string;
}

const ImageSelector: React.FC<ImageSelectorProps> = ({
  images,
  onSelect,
  onUpload,
  onDelete,
  selectedImageId
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    setIsUploading(true);
    setUploadError(null);
    try {
      const newImage = await onUpload(file);
      onSelect(newImage);
    } catch (error) {
      setUploadError(error.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (imageId: string) => {
    setDeleteError(null);
    try {
      await onDelete(imageId);
      if (selectedImageId === imageId) {
        onSelect(null);
      }
    } catch (error) {
      setDeleteError(error.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Image Library</h2>
        <ImageUploader
          onUpload={handleUpload}
          isUploading={isUploading}
          error={uploadError}
        />
      </div>

      {uploadError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Upload Error: </strong>
          <span className="block sm:inline">{uploadError}</span>
        </div>
      )}

      {deleteError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Delete Error: </strong>
          <span className="block sm:inline">{deleteError}</span>
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-4">
        <ImageGallery
          images={images}
          onSelect={onSelect}
          onDelete={handleDelete}
          selectable
        />
      </div>

      {selectedImageId && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Selected Image: </strong>
          <span className="block sm:inline">
            {images.find(img => img.id === selectedImageId)?.alt || 'Unknown image'}
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageSelector;
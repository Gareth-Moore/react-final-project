import placeholderImage from "../../public/no-image-placeholder.webp";

function getCroppedImage(image_URL: string) {
  if (!image_URL) return placeholderImage;
  const target = "media/";
  const index = image_URL.indexOf(target) + target.length;
  return image_URL.slice(0, index) + "crop/600/400/" + image_URL.slice(index);
}

export default getCroppedImage;

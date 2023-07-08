function getCroppedImage(image_URL: string) {
  const target = "media/";
  const index = image_URL.indexOf(target) + target.length;
  return image_URL.slice(0, index) + "crop/600/400/" + image_URL.slice(index);
}

export default getCroppedImage;

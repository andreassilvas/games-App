import placeHolderImage from "../assets/no-image-placeholder.webp";

const getCroppedImagesUrl = (url: string) => {
    if (!url) return placeHolderImage;

    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCroppedImagesUrl;
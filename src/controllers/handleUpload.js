import imageCompression from "browser-image-compression";
import handleProgress from "./handleProgress";

const handleUpload = (event, size, setImage) => {
	const image = event.target.files[0];
	const options = {
		maxSizeMB: size,
		useWebWorker: true,
		alwaysKeepResolution: false,
		onProgress: handleProgress
	};
	imageCompression(image, options)
		.then((compressedBlob) => {
			const convertedURL = URL.createObjectURL(compressedBlob);
			setImage(convertedURL);
		})
		.catch((err) => {
			console.log(err);
		});
};

export default handleUpload;

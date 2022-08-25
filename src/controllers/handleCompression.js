import imageCompression from "browser-image-compression";

const handleCompression = (image, size, setProgress, setConvertedImage) => {
	const handleProgress = (progress) => {
		setProgress(progress);
	};

	const options = {
		maxSizeMB: size,
		useWebWorker: true,
		alwaysKeepResolution: false,
		onProgress: handleProgress,
	};

	imageCompression(image, options)
		.then((compressedBlob) => {
			const convertedURL = URL.createObjectURL(compressedBlob);
			setConvertedImage(convertedURL);
		})
		.catch((err) => {
			console.log(err);
		});
};

export default handleCompression;

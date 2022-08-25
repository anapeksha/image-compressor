var sizeinMB;
const handleSize = (size, sizeUnit) => {
	if (sizeUnit === "KB") {
		sizeinMB = parseFloat(size) / 1024;
	} else {
		sizeinMB = parseFloat(size);
	}
	return sizeinMB;
};

export default handleSize;

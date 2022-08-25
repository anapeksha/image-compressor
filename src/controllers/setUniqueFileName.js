import { nanoid } from "nanoid";

const setUniqueFileName = () => {
	var filename = nanoid();
	return filename;
};

export default setUniqueFileName;

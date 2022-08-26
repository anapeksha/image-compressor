import React, { useEffect, useState } from "react";
import { Form, Navbar } from "./components";

function App() {
	const [size, setSize] = useState(undefined);
	const [sizeUnit, setSizeUnit] = useState("KB");
	const [image, setImage] = useState(undefined);
	const [convertedImage, setConvertedImage] = useState(undefined);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		console.log(size, sizeUnit, image);
	}, [size, sizeUnit, image, progress]);

	return (
		<div>
			<Navbar />
			<Form
				size={size}
				sizeUnit={sizeUnit}
				image={image}
				convertedImage={convertedImage}
				progress={progress}
				setSize={setSize}
				setSizeUnit={setSizeUnit}
				setImage={setImage}
				setConvertedImage={setConvertedImage}
				setProgress={setProgress}
			/>
		</div>
	);
}

export default App;

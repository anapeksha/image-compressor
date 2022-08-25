import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Progress from "./components/Progress";

function App() {
	const [size, setSize] = useState(0);
	const [sizeUnit, setSizeUnit] = useState("KB");
	const [image, setImage] = useState(undefined);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		console.log(size, sizeUnit, image);
	}, [size, sizeUnit, image]);

	return (
		<div>
			<Form
				size={size}
				sizeUnit={sizeUnit}
				image={image}
				setSize={setSize}
				setSizeUnit={setSizeUnit}
				setImage={setImage}
				setProgress={setProgress}
			/>
			<Progress progress={progress}/>
		</div>
	);
}

export default App;

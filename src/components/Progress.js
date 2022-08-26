import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function Progress(props) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (props.progress > 0) {
			setOpen(true);
		}
		if (props.progress === 100) {
			setOpen(false);
		}
	}, [props.progress]);

	return (
		<Backdrop
			sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={open}
		>
			<CircularProgress variant="determinate" value={props.progress} />
		</Backdrop>
	);
}

export default Progress;

import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

function Dropdown() {
	const sizeOption = [
		{ value: "GB", key: "gb" },
		{ value: "MB", key: "mb" },
		{ value: "KB", key: "kb" },
	];
	return (
		<TextField select variant="standard">
			{sizeOption.map((option) => {
				return (
					<MenuItem key={option.key} value={option.value}>
						{option.value}
					</MenuItem>
				);
			})}
		</TextField>
	);
}

export default Dropdown;

import { MenuItem, TextField } from "@mui/material";
import React, {useState} from "react";

function Dropdown(props) {
	const sizeOption = [
		{ value: "MB", key: "mb" },
		{ value: "KB", key: "kb" },
	];
	return (
		<TextField
			select
			variant="standard"
			defaultValue={sizeOption[1].value}
			onChange={(e) => props.setSizeUnit(e.target.value)}
		>
			{sizeOption.map((option) => {
				return (
					<MenuItem key={option.key} value={option.value} dense>
						{option.value}
					</MenuItem>
				);
			})}
		</TextField>
	);
}

export default Dropdown;

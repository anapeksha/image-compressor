import DownloadIcon from "@mui/icons-material/Download";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import {
	Box,
	Button,
	FormControl,
	FormGroup,
	Input,
	InputAdornment,
	InputLabel,
} from "@mui/material";
import React from "react";
import handleSize from "../controllers/handleSize";
import handleUpload from "../controllers/handleUpload";
import { CustomBox, CustomButton, Wrapper } from "../styles";
import Dropdown from "./Dropdown";

function Form(props) {
	return (
		<Wrapper>
			<CustomBox>
				<FormGroup>
					<FormControl>
						<form>
							<Box>
								<InputLabel htmlFor="size-label" style={{ color: "white" }}>
									Size
								</InputLabel>
								<Input
									endAdornment={
										<InputAdornment position="end">
											<Dropdown setSizeUnit={props.setSizeUnit} />
										</InputAdornment>
									}
									style={{ color: "white", borderColor: "white" }}
									value={props.size}
									autoFocus
									onChange={(e) => {
										props.setSize(e.target.value);
									}}
								/>
							</Box>
							<Box
								style={{
									display: "flex",
									justifyContent: "center",
									padding: "8px",
								}}
							>
								<CustomButton
									aria-label="upload photo"
									size="small"
									component="label"
									endIcon={<FileUploadRoundedIcon />}
								>
									Upload
									<input
										hidden
										accept="image/*"
										type="file"
										onChange={(e) => {
											var sizeinMB = handleSize(props.size, props.sizeUnit);
											handleUpload(e, sizeinMB, props.setImage);
										}}
									/>
								</CustomButton>
							</Box>
							<Button
								variant="text"
								component="a"
								endIcon={<DownloadIcon />}
								download
								href={props.image}
							>
								Download
							</Button>
						</form>
					</FormControl>
				</FormGroup>
			</CustomBox>
		</Wrapper>
	);
}

export default Form;

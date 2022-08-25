import AutorenewIcon from "@mui/icons-material/Autorenew";
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
import handleCompression from "../controllers/handleCompression";
import handleSize from "../controllers/handleSize";
import setUniqueFileName from "../controllers/setUniqueFileName";
import { CustomBox, CustomButton, Wrapper } from "../styles";
import Dropdown from "./Dropdown";
import Progress from "./Progress";

function Form(props) {
	const handleButtonDisplay = () => {
		if (props.image !== undefined && props.convertedImage === undefined) {
			return (
				<Button
					variant="text"
					size="small"
					color="error"
					endIcon={<AutorenewIcon />}
					onClick={() => {
						var sizeinMB = handleSize(props.size, props.sizeUnit);
						handleCompression(
							props.image,
							sizeinMB,
							props.setProgress,
							props.setConvertedImage
						);
					}}
				>
					Convert
				</Button>
			);
		} else if (
			props.image !== undefined &&
			props.convertedImage !== undefined
		) {
			return (
				<Button
					variant="outlined"
					component="a"
					size="small"
					color="success"
					endIcon={<DownloadIcon />}
					download={setUniqueFileName()}
					href={props.convertedImage}
				>
					Download
				</Button>
			);
		}
	};

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
										onChange={(event) => {
											props.setImage(event.target.files[0]);
										}}
									/>
								</CustomButton>
							</Box>
							<Box style={{ display: "flex", justifyContent: "center" }}>
								{handleButtonDisplay()}
							</Box>
						</form>
					</FormControl>
				</FormGroup>
				<Progress progress={props.progress} />
			</CustomBox>
		</Wrapper>
	);
}

export default Form;

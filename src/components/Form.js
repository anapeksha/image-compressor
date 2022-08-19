import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import {
	Button,
	FormControl,
	FormGroup,
	Input,
	InputAdornment,
	InputLabel,
	Stack,
} from "@mui/material";
import React from "react";
import CustomBox from "../styles/CustomBox.style";
import Wrapper from "../styles/Wrapper";
import Dropdown from "./Dropdown";

function Form() {
	return (
		<Wrapper>
			<CustomBox>
				<FormGroup>
					<FormControl>
						<form>
							<Stack spacing={2}>
								<InputLabel htmlFor="size-label">Size</InputLabel>
								<Input
									endAdornment={
										<InputAdornment position="end">
											<Dropdown />
										</InputAdornment>
									}
								/>
								<Button
									color="primary"
									aria-label="upload photo"
									size="small"
									component="label"
									endIcon={<FileUploadRoundedIcon />}
								>
									Upload
									<input hidden accept="image/*" type="file" />
								</Button>
							</Stack>
						</form>
					</FormControl>
				</FormGroup>
			</CustomBox>
		</Wrapper>
	);
}

export default Form;

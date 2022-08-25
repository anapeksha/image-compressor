import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)({
	color: "#eabbff",
	borderRadius: "5px",
	fontSize: "x-small",
	"&:hover": {
		backgroundColor: "#812ce8",
	},
});

export default CustomButton;

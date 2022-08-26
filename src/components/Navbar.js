import { AppBar, Box, Icon, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo.svg";

function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="fixed"
				elevation={10}
				style={{
					backgroundColor: "#061423",
					boxShadow:
						"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
				}}
			>
				<Toolbar>
					<Icon sx={{ mr: 1 }}>
						<img
							src={logo}
							height="100%"
							style={{
								filter:
									"invert(99%) sepia(0%) saturate(945%) hue-rotate(66deg) brightness(117%) contrast(100%)",
							}}
						/>
					</Icon>
					<Typography
						variant="body1"
						component="div"
						sx={{ flexGrow: 1 }}
						style={{ color: "white", opacity: "1.0" }}
					>
						Image Compressor
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navbar;

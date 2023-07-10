import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#febc42",
		},
		secondary: {
			main: "#1b1f20",
		},
		error: {
			main: "#967434",
		},
		text: {
			primary: "#ffefc6",
		},
	},
	typography: {
		fontFamily: "Academy",
	},
});

export default theme;

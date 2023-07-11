import { createTheme } from "@mui/material";
import { PRIMARY, TEXT, THIRD } from "commons/theme/colors";

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

	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					"& fieldset": {
						borderColor: THIRD, // Reemplaza 'desiredColor' con el color que quieras usar.
					},
					"&:hover fieldset": {
						borderColor: THIRD, // Reemplaza 'desiredColor' con el color que quieras usar.
					},
					"&.Mui-focused fieldset": {
						borderColor: PRIMARY, // Reemplaza 'desiredColor' con el color que quieras usar.
					},
				},
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					color: TEXT, // Reemplaza 'desiredColor' con el color que quieras usar.
					"&.Mui-focused": {
						color: TEXT, // Reemplaza 'desiredColor' con el color que quieras usar.
					},
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					color: "#000",
					"&.Mui-selected": {
						backgroundColor: PRIMARY, // Reemplaza 'desiredColor' con el color que quieras usar.
					},
					"&:hover": {
						backgroundColor: TEXT, // Reemplaza 'desiredColor' con el color que quieras usar.
					},
				},
			},
		},
	},
});

export default theme;

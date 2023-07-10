import { GlobalStyles, ThemeProvider } from "@mui/material";
import "./App.css";
import Navigator from "./commons/navigation/Navigator";
import theme from "assets/theme/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles
				styles={{
					"@font-face": {
						fontFamily: "Academy",
						src: `url(${require("./assets/fonts/OrbitronExtraBold.ttf")}) format('truetype')`,
					},
				}}
			/>
			<Navigator />
		</ThemeProvider>
	);
}

export default App;

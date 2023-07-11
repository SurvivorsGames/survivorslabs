import { GlobalStyles, ThemeProvider } from "@mui/material";
import "./App.css";
import Navigator from "./commons/navigation/Navigator";
import theme from "assets/theme/theme";
import { firebaseConfig } from "./firebase/initializeFirebase";
import { getApps, initializeApp } from "firebase/app";

if (!getApps().length) {
	initializeApp(firebaseConfig);
}

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

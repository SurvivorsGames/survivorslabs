import GoogleFontLoader from "react-google-font-loader";
import "./App.css";
import Navigator from "./commons/navigation/Navigator";

function App() {
	return (
		<div className="Container">
			<Navigator />
			<GoogleFontLoader
				fonts={[
					{
						font: "Graduate",
						weights: [400],
					},
					{
						font: "Roboto Mono",
						weights: [300],
					},
				]}
			/>
		</div>
	);
}

export default App;

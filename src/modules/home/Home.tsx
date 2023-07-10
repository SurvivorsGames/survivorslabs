import { Container } from "@mui/material";
import Banner from "./componentes/Banner";
import About from "modules/about/About";
import MotivationalText from "modules/about/MotivationalText";
import "./styles/home.css";

export default function Home() {
	return (
		<Container className="container" maxWidth="xl" style={{ padding: 0 }}>
			<div className="section">
				<Banner />
			</div>
			<div className="section">
				<MotivationalText />
			</div>
			<div className="section">
				<About />
			</div>
		</Container>
	);
}

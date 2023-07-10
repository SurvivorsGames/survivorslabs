import { Container } from "@mui/material";
import Banner from "./componentes/Banner";
import About from "modules/about/About";
import MotivationalText from "modules/about/MotivationalText";
import "./styles/home.css";
import { Element } from "react-scroll";

export default function Home() {
	return (
		<Container className="container" maxWidth="xl" style={{ padding: 0 }}>
			<Element name="banner" id="banner" className="section">
				<Banner />
			</Element>
			<Element name="motivational" id="motivational" className="section">
				<MotivationalText />
			</Element>
			<Element name="about" id="products" className="section">
				<About />
			</Element>
		</Container>
	);
}

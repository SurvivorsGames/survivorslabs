import { Container } from "@mui/material";
import Banner from "./componentes/Banner";
import About from "modules/about/About";
import MotivationalText from "modules/about/MotivationalText";
import "./styles/home.css";
import { Element } from "react-scroll";
import Products from "modules/products/Products";
import Contact from "modules/contact/Contact";
import Learning from "modules/learning/Learning";

export default function Home() {
	return (
		<Container className="container" maxWidth="xl">
			<Element name="banner" id="banner" className="section">
				<Banner />
			</Element>
			<Element name="motivational" id="motivational" className="section">
				<MotivationalText />
			</Element>
			<Element name="about" id="about" className="section">
				<About />
			</Element>
			{/* <Element name="promoted" id="promoted" className="section">
				<Promoted />
			</Element> */}
			<Element name="products" id="products" className="section">
				<Products />
			</Element>
			<Element name="learning" id="learning" className="section">
				<Learning />
			</Element>
			<Element name="contact" id="contact" className="section">
				<Contact />
			</Element>
		</Container>
	);
}

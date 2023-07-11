import { Container } from "@mui/material";
import Banner from "./componentes/Banner";
import About from "modules/about/About";
import MotivationalText from "modules/about/MotivationalText";
import "./styles/home.css";
import { Element } from "react-scroll";
import Promoted from "modules/promoted/Promoted";
import Products from "modules/products/Products";
import useResponsive from "commons/hooks/useResponsive";
import Footer from "modules/footer/Footer";

export default function Home() {
	const { isMobile } = useResponsive();
	return (
		<Container className="container" maxWidth="xl" style={{ padding: 0 }}>
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
			<Element name="contact" id="contact" className="section">
				<Footer />
			</Element>
		</Container>
	);
}

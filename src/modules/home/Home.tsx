import { Container } from "@mui/material";
import Banner from "./componentes/Banner";
import About from "modules/about/About";

export default function Home() {
	return (
		<Container maxWidth="xl" style={{ padding: 0 }}>
			<Banner />
			<About />
		</Container>
	);
}

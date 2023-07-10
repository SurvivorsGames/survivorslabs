import { Container } from "@mui/material";
import Banner from "./componentes/Banner";

export default function Home() {
	return (
		<Container maxWidth="xl" style={{ padding: 0 }}>
			<Banner />
		</Container>
	);
}

import { Grid } from "@mui/material";
import SVBanner from "commons/components/branch/SVBanner";
import SVFooter from "commons/components/footer/SVFooter";
import SVLink from "commons/navigation/navbar/components/SVLink";
import { PRIMARY, TEXT, THIRD } from "commons/theme/colors";
import "../../App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Newest from "./components/Newest";

export default function DashBoard() {
	return (
		<div style={{ backgroundColor: TEXT }}>
			<SVBanner />

			<Grid
				container
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Navbar />
				<Newest />
				{/* <About /> */}
				<SVFooter />
			</Grid>
		</div>
	);
}

import { Grid } from "@mui/material";
import SVBanner from "commons/components/branch/SVBanner";
import SVFooter from "commons/components/footer/SVFooter";
import SVLink from "commons/navigation/navbar/components/SVLink";
import { PRIMARY, TEXT, THIRD } from "commons/theme/colors";
import "../../App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { NewestLarge, NewestMobile } from "./components/Newest";

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
				{/* <Navbar /> */}
				{/* Vista Para PC */}
				<Grid
					item
					lg={12}
					sx={{
						display: {
							xs: "none",
							sm: "none",
							md: "none",
							lg: "inline-block",
						},
					}}
				>
					<NewestLarge />
				</Grid>
				{/* Vista para telefonos y tablets  */}
				<Grid
					item
					sm={12}
					md={12}
					xs={12}
					sx={{
						display: {
							xs: "block",
							sm: "block",
							md: "block",
							lg: "none",
						},
					}}
				>
					<NewestMobile />
				</Grid>
				{/* <About /> */}
				<SVFooter />
			</Grid>
		</div>
	);
}

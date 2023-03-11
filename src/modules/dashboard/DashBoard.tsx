import { Grid } from "@mui/material";
import { Banner } from "assets";
import SVBanner from "commons/components/branch/SVBanner";
import SVFooter from "commons/components/footer/SVFooter";
import { TEXT } from "commons/theme/colors";
import "../../App.css";
import { NewestLarge } from "./components/Newest";

export default function DashBoard() {
	return (
		<div style={{ backgroundColor: TEXT }}>
			<SVBanner picture={Banner} />

			<Grid
				container
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Grid item lg={12}>
					<NewestLarge />
				</Grid>

				<SVFooter />
			</Grid>
		</div>
	);
}

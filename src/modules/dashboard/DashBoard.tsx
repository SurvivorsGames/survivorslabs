import { Grid } from "@mui/material";
import { Banner } from "assets";
import SVBanner from "commons/components/branch/SVBanner";
import SVFooter from "commons/components/footer/SVFooter";
import { SECONDARY } from "commons/theme/colors";
import "../../App.css";
import { NewestLarge } from "./components/Newest";

export default function DashBoard() {
	return (
		<div style={{ backgroundColor: SECONDARY }}>
			<SVBanner
				desktopPicture={Banner}
				mobilePicture="https://firebasestorage.googleapis.com/v0/b/survivors-labs.appspot.com/o/assets%2FIcon.png?alt=media&token=5754d7df-0133-4be1-bbdf-3b4af127066e"
			/>

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

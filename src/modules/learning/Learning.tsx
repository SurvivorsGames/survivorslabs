import { Grid } from "@mui/material";
import CustomTitle from "commons/components/CustomTitle";
import "./styles/learning.css";
import { LandingPageVideo } from "commons/constants/UrlPics";

export default function Learning() {
	return (
		<Grid
			container
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "flex-start",
				height: "100vh",
				p: 3,
				mt: 25,
				maxWidth: "90%",
				margin: "auto",
			}}
		>
			<CustomTitle>Aprende</CustomTitle>
			<Grid item sx={{ width: "100%" }}>
				<video controls className="video">
					<source src={LandingPageVideo} type="video/mp4" />
					Tu navegador no soporta el elemento de video.
				</video>
			</Grid>
		</Grid>
	);
}

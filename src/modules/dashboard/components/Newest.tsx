import { Grid } from "@mui/material";
import { NewestBanner } from "assets";

export default function Newest() {
	return (
		<Grid container>
			<Grid item xs={12} md={12} lg={12}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<img
						width={"100%"}
						style={{ alignSelf: "center" }}
						src={NewestBanner}
					/>
					<div style={{ position: "absolute", right: 200 }}>
						<h1 style={{ textAlign: "center" }}>
							Nueva aplicación
						</h1>
					</div>
				</div>
			</Grid>
		</Grid>
	);
}

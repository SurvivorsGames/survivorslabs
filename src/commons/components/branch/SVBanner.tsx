import { Grid } from "@mui/material";
import { Banner } from "assets";
export default function SVBanner() {
	return (
		<Grid container>
			<Grid item xs={12} md={12} lg={12}>
				<img width={"100%"} src={Banner} />
			</Grid>
		</Grid>
	);
}

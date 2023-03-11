import { Grid } from "@mui/material";

interface IBanner {
	desktopPicture: string;
	mobilePicture: string;
}

export default function SVBanner(props: IBanner) {
	const { desktopPicture, mobilePicture } = props;
	return (
		<Grid container>
			<Grid
				item
				xs={12}
				md={12}
				lg={12}
				display={{
					xs: "none",
					md: "block",
					lg: "block",
				}}
			>
				<img width={"100%"} src={desktopPicture} alt="survivors labs" />
			</Grid>
			<Grid
				item
				xs={12}
				md={12}
				lg={12}
				display={{
					xs: "block",
					md: "none",
					lg: "none",
				}}
			>
				<img width={"100%"} src={mobilePicture} alt="survivors labs" />
			</Grid>
		</Grid>
	);
}

import { Grid } from "@mui/material";

interface IBanner {
	picture: string;
}

export default function SVBanner(props: IBanner) {
	const { picture } = props;
	return (
		<Grid container>
			<Grid item xs={12} md={12} lg={12}>
				<img width={"100%"} src={picture} alt="survivors labs" />
			</Grid>
		</Grid>
	);
}

import { Grid, Typography } from "@mui/material";
import CustomTitle from "commons/components/CustomTitle";

export default function About() {
	return (
		<Grid container style={{ padding: "30px" }}>
			<CustomTitle>Acerca de</CustomTitle>
			<Grid item md={8} xs={12} style={{ marginTop: "10px" }}>
				<Typography
					variant="body1"
					component={"p"}
					textAlign={"justify"}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nobis numquam non eos tempore necessitatibus nostrum tempora
					omnis eius. Sunt enim aut possimus? Voluptates, explicabo
					aperiam. Molestias ducimus consequuntur ipsam quaerat!
				</Typography>
			</Grid>
		</Grid>
	);
}

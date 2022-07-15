import { Grid } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles({
	centeredText: {
		textAlign: "center",
	},
});

export default function About() {
	const styles = useStyles();

	return (
		<Grid item xs={10} md={8} lg={8}>
			<div id="#about">
				<h1 style={{ textAlign: "center", fontFamily: "Graduate" }}>
					Survivors Labs
				</h1>
				<p
					style={{
						textAlign: "justify",
						fontFamily: "Roboto Mono",
						fontSize: 25,
					}}
				>
					Desde el 2020 apasionados por el desarrollo en todas sus
					ramas. Desde las aplicaciones web hasta los videojuegos en
					2D y 3D. Hemos podido construir proyectos que hoy usan
					muchos de los usuarios al rededor del mundo. Sobrevivimos al
					cambio, y estamos listo para darlo todo por ti. Somos
					Survivors Labs
				</p>
			</div>
		</Grid>
	);
}

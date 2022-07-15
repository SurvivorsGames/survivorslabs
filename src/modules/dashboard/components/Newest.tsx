import { Button, Grid } from "@mui/material";
import { NewestBanner } from "assets";
import { TEXT, SECONDARY } from "commons/theme/colors";

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
					<Grid
						item
						style={{
							position: "absolute",
							right: 20,
							width: "50%",
						}}
						xs={6}
						md={6}
						lg={6}
					>
						<h1
							style={{
								textAlign: "center",
								fontFamily: "Graduate",
							}}
						>
							Nueva aplicación
						</h1>
						<p
							style={{
								textAlign: "center",
								fontFamily: "Roboto Mono",
							}}
						>
							¿Te gustaría saber si es seguro subirte a un
							vehículo que ha aceptado el servicio?
							<br />
							<br /> En nuestra aplicación puedes buscar los
							reportes que ha tenido un usuario por las placas de
							su vehículo y es tu decisión tomar o no el servicio.
							Asi mismo, puedes reportar cualquier caso, cuando te
							hayas sentido incomoda o hayas detectado actividad
							sospechosa durante tu viaje.
						</p>

						<Button
							style={{
								fontFamily: "Graduate",
								textAlign: "center",
								display: "block",
								backgroundColor: SECONDARY,
								color: TEXT,
							}}
							href="https://biolink.info/protegete"
							target="__blank"
						>
							DESCARGA AHORA
						</Button>
					</Grid>
				</div>
			</Grid>
		</Grid>
	);
}

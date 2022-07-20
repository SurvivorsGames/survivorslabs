import { Button, Grid } from "@mui/material";
import { NewestBanner, NewestBannerMobile } from "assets";
import { TEXT, SECONDARY } from "commons/theme/colors";

export function NewestLarge() {
	return (
		<Grid
			container
			style={{
				backgroundColor: "#FFF",
				justifyContent: "center",
				paddingBottom: "50px",
			}}
		>
			<Grid lg={12} item style={{ marginTop: "50px" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Grid item xs={12} md={12} lg={12}>
						<img
							width={"100%"}
							style={{ alignSelf: "center" }}
							src={NewestBanner}
						/>
					</Grid>
					<Grid
						item
						style={{
							position: "absolute",
							right: 20,
							width: "50%",
						}}
						xs={12}
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

						<PromotionalText />

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

export function NewestMobile() {
	return (
		<Grid
			container
			style={{
				backgroundColor: "#FFF",
				justifyContent: "center",
				paddingBottom: "50px",
			}}
		>
			<Grid item style={{ marginTop: "50px" }}>
				<Grid item xs={12} md={12} lg={12}>
					<img
						width={"100%"}
						style={{ alignSelf: "center" }}
						src={NewestBannerMobile}
					/>
				</Grid>
				<Grid
					item
					style={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
					}}
					xs={12}
					sm={12}
				>
					<h1
						style={{
							textAlign: "center",
							fontFamily: "Graduate",
						}}
					>
						Nueva aplicación
					</h1>
					<PromotionalText />

					<Button
						style={{
							fontFamily: "Graduate",
							textAlign: "center",
							display: "block",
							backgroundColor: SECONDARY,
							color: TEXT,
							width: "80%",
							alignSelf: "center",
						}}
						href="https://biolink.info/protegete"
						target="__blank"
					>
						DESCARGA AHORA
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

const PromotionalText = () => {
	return (
		<p
			style={{
				textAlign: "center",
				fontFamily: "Roboto Mono",
			}}
		>
			¿Te gustaría saber si es seguro subirte a un vehículo que ha
			aceptado el servicio?
			<br />
			<br /> En nuestra aplicación puedes buscar los reportes que ha
			tenido un usuario por las placas de su vehículo y es tu decisión
			tomar o no el servicio. Asimismo, puedes reportar cualquier caso,
			cuando te hayas sentido incomoda o hayas detectado actividad
			sospechosa durante tu viaje.
		</p>
	);
};

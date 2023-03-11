import { Button, Grid } from "@mui/material";
import { PPFBanner } from "assets";
import { TEXT, SECONDARY } from "commons/theme/colors";
import { useNavigate } from "react-router-dom";

export function NewestLarge() {
	const navigation = useNavigate();
	return (
		<Grid
			container
			style={{
				backgroundColor: "#fff",
				justifyContent: "center",
				paddingBottom: "50px",
				padding: "50px",
			}}
		>
			<Grid
				item
				xs={12}
				md={6}
				lg={6}
				style={{ display: "flex", justifyContent: "center" }}
			>
				<img
					width={"90%"}
					src={PPFBanner}
					alt="puppy foundations"
					style={{ borderRadius: "10px", alignSelf: "center" }}
				/>
			</Grid>
			<Grid item xs={12} md={5} lg={5}>
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
						width: "100%",
						fontFamily: "Graduate",
						textAlign: "center",
						backgroundColor: SECONDARY,
						color: TEXT,
					}}
					onClick={() => navigation("puppyfoundations")}
				>
					SABER MÁS
				</Button>
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
			¿Se <b>perdió tu mascota</b> o te gustaría <b>adoptar</b> una?
			<br />
			<br /> En nuestra aplicación puedes reportar tu mascota perdida y
			nosostros nos encargaremos de notificar a los demas uusarios para
			que puedan ayudarte a encontrarla.
			<br />
			<br />
			También tienes la oportunidad de encontrar un nuevo miembro para tu
			familia
			<br />
			<br />
			¿Qué estás esperando?
		</p>
	);
};

import { Grid, Typography } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import CustomTitle from "commons/components/CustomTitle";
import { ppfColors } from "commons/constants/PPFColors";
import {
	Adopt,
	Content,
	Discover,
	ReportIcon,
} from "commons/constants/UrlPics";
import useResponsive from "commons/hooks/useResponsive";

export default function Promoted() {
	const { isMobile } = useResponsive();
	const alignCenter = { display: "flex", alignItems: "center" };
	const items = [
		{
			title: "Reporta ",
			description: "Reporta mascotas perdidas o encontradas",
			icon: ReportIcon,
		},
		{
			title: "Adopta",
			description: "Adopta un peludito que necesita de ti",
			icon: Adopt,
		},
		{
			title: "Publica",
			description: "Crea contenido o cuéntanos tus casos de exito",
			icon: Content,
		},
		{
			title: "Descubre",
			description:
				"Conecta con fundaciones o usuarios de todo latinoamérica",
			icon: Discover,
		},
	];
	return (
		<Grid
			container
			sx={{
				p: 3,
				position: "relative",
				maxWidth: "90%",
				margin: "auto",
				height: "100vh",
			}}
		>
			<div
				style={{
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				}}
			>
				<Parallax
					pages={6}
					style={{
						padding: 0,
						margin: 0,
						height: "100%",
						position: "relative",
						top: 0,
					}}
					// horizontal={isMobile}
				>
					<ParallaxLayer
						sticky={{ start: 1, end: 4 }}
						style={{ ...alignCenter, justifyContent: "flex-start" }}
					>
						<ParallaxLayer
							offset={0}
							speed={0.5}
							style={{ ...alignCenter, justifyContent: "center" }}
						>
							<Grid item sx={{ mb: isMobile ? 1 : 10 }}>
								<CustomTitle>Proyectos destacados</CustomTitle>
							</Grid>
						</ParallaxLayer>
						<Card>
							<Grid item md={12} xs={12}>
								<CustomTitle color={ppfColors.third}>
									Puppy Foundations
								</CustomTitle>
								<Typography
									variant="body1"
									component={"p"}
									sx={{
										mt: 3,
										textAlign: "left",
										letterSpacing: "1px",
									}}
									fontFamily={"OrbitronRegular"}
								>
									Puppy foundations es una aplicación móvil
									donde puedes buscar mascotas que esten
									listas para ser adoptadas. También puedes
									reportar a tu mascota por si se ha perdido o
									reportar una que encontraste y ayudar a
									otros usuarios.
									<br />
									<br />
									Conectate con fundaciones y otros usuarios
									<br />
									¡Únete a esta gran comunidad!
								</Typography>
							</Grid>
						</Card>
					</ParallaxLayer>

					{items.map((item, index) => (
						<ParallaxLayer
							key={index}
							offset={index + 1.5}
							speed={1.5}
							style={{
								...alignCenter,
								justifyContent: "flex-end",
							}}
						>
							<Card>
								<img
									alt="icon.png"
									src={item.icon}
									style={{
										width: isMobile ? "80%" : "50%",
									}}
								/>

								<CustomTitle textAlign="center">
									{item.title}
								</CustomTitle>
							</Card>
						</ParallaxLayer>
					))}
				</Parallax>
			</div>
		</Grid>
	);
}

const Card = ({ children }: any) => {
	return (
		<Grid
			item
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				alignContent: "center",
				width: "50%",
			}}
		>
			{children}
		</Grid>
	);
};

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomTitle from "commons/components/CustomTitle";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useState } from "react";
import "./styles/about.css";
import Logger from "commons/hooks/Logger";

export default function About() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const [isVisible, setIsVisible] = useState(false);
	const [active, setActive] = useState(true);

	useEffect(() => {
		Logger.Event("load_about");
	}, []);

	const onChange = (isVisible: boolean) => {
		if (isVisible) {
			setIsVisible(true);
			setActive(false);
		}
	};

	return (
		<Grid
			container
			sx={{
				display: "flex",
				alignItems: "center",
				alignContent: "center",
				height: "100vh",
				p: 3,
				mt: 25,
				maxWidth: "90%",
				margin: "auto",
			}}
		>
			<VisibilitySensor
				onChange={onChange}
				active={active}
				partialVisibility
			>
				<Fade when={isVisible}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-start",
							alignContent: "center",
						}}
					>
						<CustomTitle>Acerca de</CustomTitle>
						<Grid item md={6} xs={12} sx={{ mt: 2 }}>
							<Typography
								variant={isMobile ? "body2" : "body1"}
								component={"p"}
								textAlign={"justify"}
								sx={{ lineHeight: 1.5, letterSpacing: "3px" }}
								fontFamily={"OrbitronRegular"}
							>
								Survivors Labs es una compañía pionera en el
								desarrollo de software, cuya misión es empujar
								los límites de lo posible y superar las
								expectativas del mundo tecnológico.
								<br />
								<br />
								Como auténticos supervivientes de la revolución
								digital, no solo abrazamos el cambio, sino que
								nos esforzamos por ser sus líderes.
								<br />
								<br />
								Ofrecemos soluciones innovadoras que satisfacen
								las necesidades más complejas de nuestros
								clientes.
								<br />
							</Typography>
						</Grid>
					</div>
				</Fade>
			</VisibilitySensor>
		</Grid>
	);
}

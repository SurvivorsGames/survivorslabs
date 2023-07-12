import { Grid, Typography } from "@mui/material";
import CustomTitle from "commons/components/CustomTitle";
import "./styles/footer.css";
import { PRIMARY, TEXT } from "commons/theme/colors";
import useResponsive from "commons/hooks/useResponsive";
import ContactForm from "./components/Form";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";
import Logger from "commons/hooks/Logger";

export default function Contact() {
	const { onlyMobile } = useResponsive();

	useEffect(() => {
		Logger.Event("load_contact");
	}, []);
	return (
		<Grid
			container
			sx={{
				p: 3,
				height: "100vh",
				maxWidth: "90%",
				display: "flex",
				flexDirection: "row",
			}}
		>
			<Grid item md={12} xs={12}>
				<CustomTitle>Contacto</CustomTitle>
				<Fade bottom>
					<ContactForm />
				</Fade>
			</Grid>
			<Grid
				item
				md={12}
				xs={12}
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: onlyMobile ? "center" : "space-between",
					marginTop: onlyMobile ? "100px" : "auto", // Añade esta línea
					borderTop: `3px solid ${PRIMARY}`,
				}}
				className="footer"
			>
				{!onlyMobile && (
					<>
						<a
							href="#about"
							style={{ textDecoration: "none", color: TEXT }}
						>
							<Typography
								sx={{ textAlign: "center", fontSize: "1.3rem" }}
								variant={"h6"}
								component="h6"
							>
								Acerca de
							</Typography>
						</a>
						<a
							href="#products"
							style={{ textDecoration: "none", color: TEXT }}
						>
							<Typography
								sx={{ textAlign: "center", fontSize: "1.3rem" }}
								variant={"h6"}
								component="h6"
							>
								Productos
							</Typography>
						</a>
						<a
							href="#contact"
							style={{ textDecoration: "none", color: TEXT }}
						>
							<Typography
								sx={{ textAlign: "center", fontSize: "1.3rem" }}
								variant={"h6"}
								component="h6"
							>
								Contacto
							</Typography>
						</a>
					</>
				)}
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
					}}
				>
					<SocialIcon
						url={require("../../assets/social/instagram.png")}
						to="https://www.instagram.com/survivorslabs/"
						event="instagram"
					/>
					<SocialIcon
						url={require("../../assets/social/facebook.png")}
						to="https://www.facebook.com/survivorslabs"
						event="facebook"
					/>
					<SocialIcon
						url={require("../../assets/social/whatsapp.png")}
						to="https://wa.me/+573026841676?text=¡Hola Survivors! Me gustaría cotizar un servicio"
						event="whatsapp"
					/>
				</div>
			</Grid>
		</Grid>
	);
}

const SocialIcon = ({ url, to, event }: any) => {
	return (
		<a
			onClick={() => Logger.Event(`social_icon_${event}`)}
			href={to}
			target="__blank"
			style={{ textDecoration: "none" }}
		>
			<img
				src={url}
				alt="social.png"
				style={{ width: "2rem", margin: "10px", alignSelf: "center" }}
				className="social-icon"
			/>
		</a>
	);
};

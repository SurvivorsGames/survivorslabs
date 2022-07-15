import { Grid } from "@mui/material";
import { SECONDARY, TEXT } from "commons/theme/colors";

export default function SVFooter() {
	return (
		<Grid container style={{ backgroundColor: SECONDARY, padding: "10px" }}>
			<Grid
				item
				xs={12}
				md={4}
				lg={4}
				style={{ flexDirection: "column" }}
			>
				<h3
					style={{
						textAlign: "center",
						fontFamily: "Graduate",
						color: TEXT,
					}}
				>
					Plataformas
				</h3>
				<CustomLink href="https://play.google.com/store/apps/dev?id=8967255048321058338&hl=es">
					App Store
				</CustomLink>
				<CustomLink href="https://play.google.com/store/apps/dev?id=8967255048321058338&hl=es">
					Google Play
				</CustomLink>
			</Grid>
			<Grid
				item
				xs={12}
				md={4}
				lg={4}
				style={{ flexDirection: "column" }}
			>
				<h3
					style={{
						textAlign: "center",
						fontFamily: "Graduate",
						color: TEXT,
					}}
				>
					Redes sociales
				</h3>
				<CustomLink href="https://www.instagram.com/survivorslabs/">
					Instagram
				</CustomLink>
				<CustomLink href="https://www.linkedin.com/company/survivors-labs/">
					LinkedIn
				</CustomLink>
			</Grid>
			<Grid
				item
				xs={12}
				md={4}
				lg={4}
				style={{ flexDirection: "column" }}
			>
				<h3
					style={{
						textAlign: "center",
						fontFamily: "Graduate",
						color: TEXT,
					}}
				>
					Recursos
				</h3>
				<CustomLink href="https://drive.google.com/file/d/1I7cXsODcrLPPk1wKYCliGmOycbUwONZl/view?usp=sharing">
					Políticas de privacidad
				</CustomLink>
				{/* <CustomLink href="#">Registros</CustomLink> */}
			</Grid>
			<Grid item xs={12} md={12} lg={12} style={{ marginTop: "20px" }}>
				<p
					style={{
						textAlign: "center",
						fontFamily: "Graduate",
						color: TEXT,
					}}
				>
					&copy; Survivors Labs 2020
				</p>
			</Grid>
		</Grid>
	);
}

interface ICustomLink {
	children: any;
	href: string;
}

export function CustomLink({ children = "", href = "#" }: ICustomLink) {
	return (
		<a
			style={{
				textDecoration: "none",
				textAlign: "center",
				fontFamily: "Roboto Mono",
				display: "block",
				color: TEXT,
				margin: "5px",
			}}
			href={href}
			target="__blank"
		>
			{children}
		</a>
	);
}

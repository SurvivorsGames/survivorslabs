import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Grid,
	Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/banner.css";
import { TEXT } from "commons/theme/colors";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import useResponsive from "commons/hooks/useResponsive";
import { Link } from "react-router-dom";
import Custombutton from "commons/components/Custombutton";

const Banner = () => {
	const { isMobile } = useResponsive();
	const [openDrawer, setOpenDrawer] = React.useState(false);

	const handleDrawerToggle = () => {
		setOpenDrawer(!openDrawer);
	};

	const menuItems = [
		{ text: "Acerca de", link: "#about", icon: null },
		{ text: "Productos", link: "#products", icon: null },
		{ text: "Contacto", link: "#contact", icon: null },
	];

	return (
		<div
			style={{
				height: "100vh",
			}}
		>
			<Zoom ssrFadeout>
				<img
					src={require("../../../assets/design/banner.webp")}
					alt="banner"
					style={{
						width: "100%",
						position: "absolute",
						zIndex: -2,
						height: "100vh",
						objectFit: "cover",
						alignSelf: "flex-end",
					}}
				/>
			</Zoom>
			<AppBar position="static" color="transparent" elevation={0}>
				<Toolbar>
					<img
						alt="icon"
						src="https://firebasestorage.googleapis.com/v0/b/survivors-labs.appspot.com/o/assets%2FIcon.png?alt=media&token=5754d7df-0133-4be1-bbdf-3b4af127066e"
						style={{
							width: isMobile ? "1.5rem" : "2rem",
						}}
					/>
					<Typography
						variant="h1"
						component={Link}
						to="/"
						style={{
							flexGrow: 1,
							display: "inline-block",
							margin: "0 8px",
							textDecoration: "none",
							color: "white",
							fontSize: isMobile ? "1rem" : "2rem",
							zIndex: 10,
						}}
					>
						Survivors Labs
					</Typography>

					{isMobile ? (
						<>
							<IconButton
								edge="end"
								color="inherit"
								onClick={handleDrawerToggle}
							>
								<MenuIcon />
							</IconButton>
							<Drawer
								anchor="right"
								open={openDrawer}
								onClose={handleDrawerToggle}
							>
								<List>
									{menuItems.map((item, index) => (
										<ListItem
											key={index}
											onClick={handleDrawerToggle}
											className="menu-item"
											style={{ color: "black" }}
										>
											<a
												key={index}
												href={item.link}
												style={{
													textDecoration: "none",
													color: "black",
												}}
											>
												<ListItemText
													primary={item.text}
												/>
											</a>
										</ListItem>
									))}
								</List>
							</Drawer>
						</>
					) : (
						<nav>
							{menuItems.map((item, index) => (
								<a
									key={index}
									href={item.link}
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<Typography
										variant="h6"
										style={{
											display: "inline-block",
											margin: "0 8px",
											textDecoration: "none",
											fontSize: "1rem",
										}}
										className="menu-item"
									>
										{item.text}
									</Typography>
								</a>
							))}
						</nav>
					)}
				</Toolbar>
				<Grid
					container
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignContent: "center",
						height: "90vh",
					}}
				>
					<Grid
						container
						style={{ display: "flex", flexDirection: "row" }}
					>
						<CustomSolution>
							Diseñamos <br /> Desarrollamos
							<br /> Cumplimos <br />
							tus sueños
						</CustomSolution>

						<CustomSolution>
							Soluciones <br /> Tecnológicas
							<br /> Para tu
							<br />
							Empresa
						</CustomSolution>
					</Grid>
					<Fade left delay={2000}>
						<Grid
							item
							style={{ margin: "30px", marginTop: "100px" }}
						>
							<Custombutton href="https://wa.me/+573026841676?text=¡Hola Survivors! Me gustaría cotizar un servicio">
								Cotizar ahora
							</Custombutton>
						</Grid>
					</Fade>
				</Grid>
			</AppBar>
		</div>
	);
};

const CustomSolution = ({ isMobile, children }: any) => {
	return (
		<Grid
			item
			md={5}
			sm={5}
			xs={12}
			style={{
				margin: "10px",
				borderLeft: `1px solid ${TEXT}`,
				marginLeft: "30px",
				paddingLeft: "15px",
			}}
		>
			<Typography
				variant={isMobile ? "h6" : "h5"}
				component={"h4"}
				className="typing"
				fontFamily={"OrbitronRegular"}
			>
				{children}
			</Typography>
		</Grid>
	);
};

export default Banner;

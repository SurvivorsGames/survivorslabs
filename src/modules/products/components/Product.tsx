import { Button, Grid, Typography } from "@mui/material";
import CustomTitle from "commons/components/CustomTitle";
import { PRIMARY, TEXT } from "commons/theme/colors";
import Fade from "react-reveal/Fade";
import "../styles/products.css";
import useResponsive from "commons/hooks/useResponsive";

interface IProduct {
	title: string;
	description: string;
	href: string;
	slide: string;
}

export default function Product(props: IProduct) {
	const { title, description, slide, href } = props;
	const { isMobile, onlyMobile, onlyTablet } = useResponsive();

	return (
		<Grid
			item
			md={3}
			sm={4}
			xs={12}
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-around",
				border: `solid 1px ${PRIMARY}`,
				padding: "10px",
				height: "500px",
				width: onlyMobile ? "100%" : "375px",
				margin: onlyMobile ? "0px" : onlyTablet ? "0px" : "15px",
				borderRadius: "2px",
			}}
			className={isMobile ? "" : "product"}
		>
			<Fade
				left={slide === "left"}
				right={slide === "right"}
				top={slide === "top"}
				bottom={slide === "bottom"}
			>
				<CustomTitle textAlign={"center"}>{title}</CustomTitle>
				<Typography
					variant="body1"
					component="p"
					sx={{
						color: TEXT,
						fontFamily: "Roboto",
						textAlign: "center",
						fontSize: "20px",
						letterSpacing: "1px",
					}}
				>
					{description}
				</Typography>
			</Fade>
			<Button
				variant="contained"
				onClick={() => window.open(href, "__blank")}
			>
				Cotizar
			</Button>
		</Grid>
	);
}

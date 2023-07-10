import { TEXT } from "commons/theme/colors";
import { Grid, Typography } from "@mui/material";
import useResponsive from "commons/hooks/useResponsive";
import Zoom from "react-reveal/Zoom";

function MotivationalText() {
	const { isMobile } = useResponsive();
	return (
		<Grid
			container
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			sx={{ height: "100vh" }}
		>
			<Zoom>
				<Typography
					variant="h1"
					component="h1"
					sx={{
						color: TEXT,
						fontSize: isMobile ? "4rem" : "8rem",
						textAlign: "center",
					}}
				>
					TUS <br /> SUEÑOS <br /> SE CUMPLEN <br /> AQUÍ <br /> Y
					AHORA
				</Typography>
			</Zoom>
		</Grid>
	);
}

export default MotivationalText;

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomTitle from "commons/components/CustomTitle";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

export default function About() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const [isVisible, setIsVisible] = useState(false);
	const [active, setActive] = useState(true);

	const onChange = (isVisible: boolean) => {
		if (isVisible) {
			setIsVisible(true);
			setActive(false);
		}
	};

	return (
		<Grid container sx={{ p: 3, mt: 25, maxWidth: "90%", margin: "auto" }}>
			<VisibilitySensor
				onChange={onChange}
				active={active}
				partialVisibility
			>
				<Fade when={isVisible}>
					<div>
						<CustomTitle>Acerca de</CustomTitle>
						<Grid item md={6} xs={12} sx={{ mt: 2 }}>
							<Typography
								variant={isMobile ? "body2" : "body1"}
								component={"p"}
								textAlign={"justify"}
								sx={{ lineHeight: 1.5 }}
							>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nobis numquam non eos tempore
								necessitatibus nostrum tempora omnis eius. Sunt
								enim aut possimus? Voluptates, explicabo
								aperiam. Molestias ducimus consequuntur ipsam
								quaerat!
							</Typography>
						</Grid>
					</div>
				</Fade>
			</VisibilitySensor>
		</Grid>
	);
}

import { Grid } from "@mui/material";
import CustomTitle from "commons/components/CustomTitle";
import "./styles/learning.css";
import { LandingPageVideo, SeoPageVide } from "commons/constants/UrlPics";
import useResponsive from "commons/hooks/useResponsive";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const videos = [{ url: LandingPageVideo }, { url: SeoPageVide }];

export default function Learning() {
	const { onlyMobile } = useResponsive();
	return (
		<Grid
			container
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "flex-start",
				height: "100vh",
				p: onlyMobile ? 1 : 3,
				mt: 25,
				width: onlyMobile ? "100%" : "90%",
			}}
		>
			<CustomTitle>Aprende</CustomTitle>
			{onlyMobile ? (
				<Splide
					style={{
						width: "100%",
						alignSelf: "center",
						justifyContent: "center",
					}}
					aria-label="Productos para ti"
				>
					{videos.map((item, index) => (
						<SplideSlide key={index}>
							<video controls className="video">
								<source src={item.url} type="video/mp4" />
								Tu navegador no soporta el elemento de video.
							</video>
						</SplideSlide>
					))}
				</Splide>
			) : (
				<Grid
					item
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "space-around",
					}}
				>
					<video controls className="video">
						<source src={LandingPageVideo} type="video/mp4" />
						Tu navegador no soporta el elemento de video.
					</video>
					<video controls className="video">
						<source src={SeoPageVide} type="video/mp4" />
						Tu navegador no soporta el elemento de video.
					</video>
				</Grid>
			)}
		</Grid>
	);
}

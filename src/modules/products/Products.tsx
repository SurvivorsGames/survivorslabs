import { Grid } from "@mui/material";
import Product from "./components/Product";
import CustomTitle from "commons/components/CustomTitle";
import useResponsive from "commons/hooks/useResponsive";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect } from "react";
import Logger from "commons/hooks/Logger";

export default function Products() {
	const { onlyMobile } = useResponsive();

	useEffect(() => {
		Logger.Event("load_products");
	}, []);

	const productList = [
		{
			title: "Tu página web",
			description:
				"Desarrollamos páginas web excepcionales, atractivas y eficientes. ¡Destaca online con nosotros!",
			slide: "left",
			href: "https://wa.me/+573026841676?text=¡Hola Survivors! Me gustaría obtener una asesoría gratis y una cotización para mi negocio",
			event: "web_design",
		},
		{
			title: "Aplicación móvil",
			description:
				"Impulsamos tu negocio con aplicaciones móviles innovadoras y efectivas. ¡Transforma tu idea en realidad!",
			slide: "bottom",
			href: "https://wa.me/+573026841676?text=¡Hola Survivors! Tengo una idea y quisiera hacerla realidad...",
			event: "mobile_app",
		},
		{
			title: "Marketing Digital",
			description:
				"Aceleramos tu crecimiento online con estrategias de SEO y marketing digital efectivas. ¡Alcanza el éxito en la web con nosotros!",
			slide: "right",
			href: "https://wa.me/+573026841676?text=¡Hola Survivors! Deseo impulsar mis ventas o darle visibilidad a mi negocio",
			event: "marketing",
		},
	];

	return (
		<Grid
			container
			sx={
				onlyMobile
					? {
							p: 3,
							mt: 5,
							maxWidth: "100vw",
							height: "100vh",
							alignItems: "center",
					  }
					: {
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "flex-start",
							height: "100vh",
							p: 3,
							mt: 25,
							maxWidth: "90%",
							margin: "auto",
					  }
			}
		>
			<CustomTitle>Productos para ti</CustomTitle>

			{onlyMobile ? (
				<Grid item md={12} xs={12} sm={12}>
					<Splide
						style={{
							justifyContent: "center",
						}}
						aria-label="Productos para ti"
					>
						{productList.map((item, index) => (
							<SplideSlide key={index}>
								<Product
									title={item.title}
									description={item.description}
									slide={item.slide}
									href={item.href}
									event={item.event}
								/>
							</SplideSlide>
						))}
					</Splide>
				</Grid>
			) : (
				<Grid display={"flex"} justifyContent={"center"}>
					{productList.map((item, index) => (
						<Product
							key={index}
							title={item.title}
							description={item.description}
							slide={item.slide}
							href={item.href}
							event={item.event}
						/>
					))}
				</Grid>
			)}
		</Grid>
	);
}

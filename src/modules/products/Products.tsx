import { Grid } from "@mui/material";
import Product from "./components/Product";
import CustomTitle from "commons/components/CustomTitle";

export default function Products() {
	const productList = [
		{
			title: "Tu página web",
			description:
				"Desarrollamos páginas web excepcionales, atractivas y eficientes. ¡Destaca online con nosotros!",
			slide: "left",
		},
		{
			title: "Aplicación móvil",
			description:
				"Impulsamos tu negocio con aplicaciones móviles innovadoras y efectivas. ¡Transforma tu idea en realidad!",
			slide: "bottom",
		},
		{
			title: "Marketing Digital",
			description:
				"Aceleramos tu crecimiento online con estrategias de SEO y marketing digital efectivas. ¡Alcanza el éxito en la web con nosotros!",
			slide: "right",
		},
	];

	return (
		<Grid
			container
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "flex-start",
				height: "100vh",
				p: 3,
				mt: 25,
				maxWidth: "90%",
				margin: "auto",
			}}
		>
			<CustomTitle>Productos para ti</CustomTitle>
			{productList.map((item, index) => (
				<Product
					key={index}
					title={item.title}
					description={item.description}
					slide={item.slide}
				/>
			))}
		</Grid>
	);
}

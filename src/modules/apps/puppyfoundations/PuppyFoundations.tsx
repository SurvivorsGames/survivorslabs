import { Button, Grid } from "@mui/material";
import { PPFBanner } from "assets";
import SVBanner from "commons/components/branch/SVBanner";
import { primary, third } from "commons/constants/PPFColors";
import {
	Adopt,
	Content,
	Discover,
	ReportIcon,
} from "commons/constants/UrlPics";
import BoardingItem from "./components/BoardingItem";

const items = [
	{
		title: "Mascotas perdidas",
		description:
			"Te ayudamos a encontrar esa mascota que se perdió en el parque. Usamos un mapa interactivo donde puedes hacer el reporte, y todos los usuarios que se encuentren cerca a la ubicación del reporte, serán notificados para que sea mas fácil encontrar a tu mascota",
		picture: ReportIcon,
	},
	{
		title: "Mascotas en adopción",
		description:
			"Si estas buscando un nuevo miembro en tu familia, puedes hacerlo a través de nuestra aplicación. Filtrando por los terminos de búsqueda que prefieras. Como la ubicación, edad, sexo... De esta manera aseguramos que seas encuentres el miembro perfecto ",
		picture: Adopt,
		alignment: "right",
	},
	{
		title: "Descubre",
		description:
			"Somos una comunidad gigante, donde podras encontrar publicaciones de toda latinoamérica. Entre los demás usuarios se encuentran tambien fundaciones que requieren de tu apoyo y nos muestran su labor",
		picture: Discover,
	},
	{
		title: "Contenido de valor",
		description:
			"Crea contenido de valor para los otros usuarios que también forman parte de la comunidad de Puppy Foundations. Así logramos tener un red social amigable con todos",
		picture: Content,
		alignment: "right",
	},
];

export default function PuppyFoundations() {
	return (
		<Grid container style={{ backgroundColor: primary }}>
			<SVBanner picture={PPFBanner} />
			{items.map((item, index) => (
				<BoardingItem
					key={index}
					title={item.title}
					description={item.description}
					picture={item.picture}
					alignment={item.alignment}
				/>
			))}
			<Grid item xs={12} md={12} lg={12}>
				<h1 style={{ color: third, textAlign: "center" }}>
					Descarga ahora
				</h1>
			</Grid>
			<Grid
				item
				xs={12}
				md={12}
				lg={12}
				style={{ display: "flex", justifyContent: "center" }}
			>
				<Button
					href="https://play.google.com/store/apps/details?id=com.survivorsgames.puppyfound&hl=es_CO&gl=US"
					target="_blank"
				>
					<img
						src="https://firebasestorage.googleapis.com/v0/b/survivors-labs.appspot.com/o/assets%2Fgoogle%20play.png?alt=media&token=19b55063-3b62-4bf4-b023-ca7061fc56b0"
						alt="google play"
						height="90px"
					/>
				</Button>
				<Button
					href="https://apps.apple.com/uy/app/puppy-foundations/id1636893966"
					target="_blank"
				>
					<img
						src="https://firebasestorage.googleapis.com/v0/b/survivors-labs.appspot.com/o/assets%2Fapp%20store.png?alt=media&token=15a20f88-6757-4d2e-9746-aa0df60ba448"
						alt="app store"
						height="70px"
					/>
				</Button>
			</Grid>
			{/* <Button title="Descarga ahora" href="" target="_blank" /> */}
		</Grid>
	);
}

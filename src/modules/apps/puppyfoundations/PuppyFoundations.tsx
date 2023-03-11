import { Grid } from "@mui/material";
import { PPFBanner } from "assets";
import SVBanner from "commons/components/branch/SVBanner";
import {
	Adopt,
	Content,
	Discover,
	ReportIcon,
} from "commons/constants/UrlPics";
import BoardingItem from "./components/BoardingItem";

export default function PuppyFoundations() {
	return (
		<Grid container>
			<SVBanner picture={PPFBanner} />
			<BoardingItem
				title="Mascotas perdidas"
				description="Te ayudamos a encontrar esa mascota que se perdió en el parque. Usamos un mapa interactivo donde puedes hacer el reporte, y todos los usuarios que se encuentren cerca a la ubicación del reporte, serán notificados para que sea mas fácil encontrar a tu mascota"
				picture={ReportIcon}
			/>
			<BoardingItem
				title="Mascotas en adopción"
				description="Si estas buscando un nuevo miembro en tu familia, puedes hacerlo a través de nuestra aplicación. Filtrando por los terminos de búsqueda que prefieras. Como la ubicación, edad, sexo... De esta manera aseguramos que seas encuentres el miembro perfecto "
				picture={Adopt}
				alignment="right"
			/>
			<BoardingItem
				title="Descubre"
				description="Somos una comunidad gigante, donde podras encontrar publicaciones de toda latinoamérica. Entre los demás usuarios se encuentran tambien fundaciones que requieren de tu apoyo y nos muestran su labor"
				picture={Discover}
			/>
			<BoardingItem
				title="Contenido de valor"
				description="Crea contenido de valor para los otros usuarios que también forman parte de la comunidad de Puppy Foundations. Así logramos tener un red social amigable con todos"
				picture={Content}
				alignment="right"
			/>
		</Grid>
	);
}

import SVBanner from "commons/components/branch/SVBanner";
import SVLink from "commons/navigation/navbar/components/SVLink";
import { TEXT } from "commons/theme/colors";
import "../../App.css";

export default function DashBoard() {
	const itemsNav = [
		{
			label: "Nosotros",
			action: () => {},
		},
		{
			label: "Aplicaciones",
			action: () => {},
		},
		{
			label: "Juegos",
			action: () => {},
		},
	];

	return (
		<>
			<SVBanner />
			<div
				style={{
					position: "absolute",
					bottom: 30,
					paddingLeft: "600px",
				}}
			>
				<label
					style={{
						color: TEXT,
						textAlign: "center",
						alignSelf: "center",
					}}
				>
					...Sitio en construcción...
				</label>
				{/* {itemsNav.map((item) => (
							<SVLink onClick={item.action}>{item.label}</SVLink>
						))} */}
			</div>
		</>
	);
}

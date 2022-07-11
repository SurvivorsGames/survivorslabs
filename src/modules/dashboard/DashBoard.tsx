import SVBanner from "commons/components/branch/SVBanner";
import SVLink from "commons/navigation/navbar/components/SVLink";
import { PRIMARY, TEXT } from "commons/theme/colors";
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
		<div>
			<SVBanner />
			<div
				style={{
					display: "flex",
					position: "absolute",
					bottom: 20,
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
					alignContent: "center",
				}}
			>
				<div>
					{itemsNav.map((item, i) => (
						<>
							<SVLink onClick={item.action}>{item.label}</SVLink>
							{i !== itemsNav.length - 1 && (
								<label style={{ color: TEXT }}> | </label>
							)}
						</>
					))}
				</div>
			</div>
		</div>
	);
}

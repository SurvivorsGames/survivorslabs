import SVLink from "commons/navigation/navbar/components/SVLink";
import { TEXT } from "commons/theme/colors";

export default function Navbar() {
	const itemsNav = [
		{
			label: "Instagram",
			action: () => {},
		},
		{
			label: "Twitter",
			action: () => {},
		},
		{
			label: "TikTok",
			action: () => {},
		},
		{
			label: "WhatsApp",
			action: () => {},
		},
	];
	return (
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
					<span key={i}>
						<SVLink onClick={item.action}>{item.label}</SVLink>
						{i !== itemsNav.length - 1 && (
							<label style={{ color: TEXT }}> | </label>
						)}
					</span>
				))}
			</div>
		</div>
	);
}

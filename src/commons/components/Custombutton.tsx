import { Button } from "@mui/material";
import "./styles/button.css";
import { TEXT } from "commons/theme/colors";
import Logger from "commons/hooks/Logger";

interface ICustomButton {
	children: any;
	width?: number | string;
	variant?: any;
	href?: string;
}
export default function Custombutton(props: ICustomButton) {
	const { children, width = 300, variant = "outlined", href } = props;
	return (
		<Button
			className="button"
			sx={{
				width: width,
				fontFamily: "Roboto",
				color: TEXT,
			}}
			variant={variant}
			onClick={() => {
				Logger.Event("button_cotizar_banner");
				window.open(href, "__blank");
			}}
		>
			{children}
		</Button>
	);
}

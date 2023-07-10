import { Typography } from "@mui/material";
import { TEXT } from "commons/theme/colors";

interface ICustomTitle {
	variant?: any;
	fontSize?: string;
	textAlign?: any;
	color?: string;
	children: any;
}

export default function CustomTitle(props: ICustomTitle) {
	const {
		variant = "h1",
		fontSize = "2rem",
		children,
		textAlign = "left",
		color = TEXT,
	} = props;
	return (
		<Typography
			variant={variant}
			style={{
				width: "100%",
				display: "block",
				textDecoration: "none",
				fontSize: fontSize,
				textAlign: textAlign,
				color: color,
			}}
			component={variant}
		>
			{children}
		</Typography>
	);
}

import { Typography } from "@mui/material";

interface ICustomTitle {
	variant?: any;
	fontSize?: string;
	textAlign?: any;
	children: any;
}

export default function CustomTitle(props: ICustomTitle) {
	const {
		variant = "h1",
		fontSize = "2rem",
		children,
		textAlign = "left",
	} = props;
	return (
		<Typography
			variant={variant}
			style={{
				width: "100%",
				display: "flex",
				textDecoration: "none",
				fontSize: fontSize,
				textAlign: textAlign,
			}}
			component={variant}
		>
			{children}
		</Typography>
	);
}

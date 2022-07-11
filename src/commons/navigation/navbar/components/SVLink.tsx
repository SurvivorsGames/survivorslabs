import { Button, makeStyles, withStyles } from "@mui/material";
import { PRIMARY, SECONDARY, TEXT, THIRD } from "commons/theme/colors";

interface ISVLink {
	children: any;
	onClick: any;
}

export default function SVLink(props: ISVLink) {
	const { children, onClick } = props;
	return (
		<Button
			onClick={onClick}
			style={{
				color: PRIMARY,
				textDecoration: "underline",
				textDecorationColor: PRIMARY,
				display: "inline-block",
				padding: 20,
			}}
		>
			{children}
		</Button>
	);
}

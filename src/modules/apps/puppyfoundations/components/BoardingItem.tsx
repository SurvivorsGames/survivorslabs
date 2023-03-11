import { Grid } from "@mui/material";
import { light, primary, third } from "commons/constants/PPFColors";

interface IBoardingItem {
	title: string;
	description: string;
	picture: string;
	alignment?: string;
}

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export default function BoardingItem(props: IBoardingItem) {
	const { title, description, picture, alignment = "left" } = props;

	return (
		<Grid container style={{ padding: "50px" }}>
			{isMobile || alignment === "left" ? (
				<>
					<Grid
						item
						xs={12}
						md={6}
						lg={6}
						style={{ display: "flex", justifyContent: "center" }}
					>
						<img
							src={picture}
							alt=""
							width={"200px"}
							height={"200px"}
						/>
					</Grid>
					<Grid xs={12} md={6} lg={6}>
						<Title alingment={alignment}>{title}</Title>
						<Description alingment={alignment}>
							{description}
						</Description>
					</Grid>
				</>
			) : (
				<>
					<Grid xs={12} md={6} lg={6}>
						<Title alingment={alignment}>{title}</Title>
						<Description alingment={alignment}>
							{description}
						</Description>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						lg={6}
						style={{ display: "flex", justifyContent: "center" }}
					>
						<img
							src={picture}
							alt=""
							width={"250px"}
							height={"250px"}
						/>
					</Grid>
				</>
			)}
		</Grid>
	);
}

const Title = (props: { children: any; alingment: string }) => {
	return (
		<h1
			style={{
				textAlign: isMobile
					? "center"
					: props.alingment === "left"
					? "left"
					: "right",
				color: third,
			}}
		>
			{props.children}
		</h1>
	);
};

const Description = (props: { children: any; alingment: string }) => {
	return (
		<p
			style={{
				textAlign: isMobile
					? "center"
					: props.alingment === "left"
					? "left"
					: "right",
				color: light,
			}}
		>
			{props.children}
		</p>
	);
};

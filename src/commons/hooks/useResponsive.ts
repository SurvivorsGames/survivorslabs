import { useMediaQuery, useTheme } from "@mui/material";

export default function useResponsive() {
	const theme = useTheme();
	const onlyMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const onlyTablet = useMediaQuery(theme.breakpoints.down("md"));
	const isMobile = onlyMobile || onlyTablet;

	return {
		onlyMobile,
		onlyTablet,
		isMobile,
	};
}

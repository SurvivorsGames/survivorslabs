import { useMediaQuery, useTheme } from "@mui/material";

export default function useResponsive() {
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down("sm"));
	const tablet = useMediaQuery(theme.breakpoints.down("md"));
	const isMobile = mobile || tablet;

	return {
		isMobile,
	};
}

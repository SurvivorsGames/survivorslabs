import Home from "modules/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Navigator() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

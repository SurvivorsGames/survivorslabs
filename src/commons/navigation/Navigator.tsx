import DashBoard from "modules/dashboard/DashBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Navigator() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DashBoard />}>
					<Route path="apps" element={<div></div>}>
						<Route path=":protegete" element={<div></div>} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

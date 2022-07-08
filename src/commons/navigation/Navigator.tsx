import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import DashBoard from "../../modules/dashboard/DashBoard";

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

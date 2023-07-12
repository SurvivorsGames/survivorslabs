import { getAnalytics, logEvent } from "firebase/analytics";

class Logger {
	Event = (name: string, params?: any) => {
		logEvent(getAnalytics(), name, params ?? null);
	};
}

export default new Logger();

import { useState } from "react";
import { IFormData } from "../components/Form";
import { addDoc, collection, getFirestore } from "@firebase/firestore";
import useResponsive from "commons/hooks/useResponsive";

export default function useContact() {
	const [loading, setLoading] = useState<boolean>(false);
	const { onlyMobile, onlyTablet, isMobile } = useResponsive();

	const handleSendForm = async (form: IFormData) => {
		setLoading(true);
		try {
			const app = getFirestore();
			const docRef = await addDoc(collection(app, "contacts"), {
				...form,
				date: new Date(),
				answered: false,
				platform: onlyMobile
					? "Celular"
					: onlyTablet
					? "Tablet"
					: !isMobile
					? "Computador"
					: "Movil",
			});
			console.log("Document written with ID: ", docRef.id);
			return true;
		} catch (e) {
			console.error("Error adding document: ", e);
			return false;
		} finally {
			setLoading(false);
		}
	};

	return {
		handleSendForm,
		loading,
	};
}

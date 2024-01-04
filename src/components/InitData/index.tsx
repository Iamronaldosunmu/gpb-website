import { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import useProductStore from "../../store/products";
import useClientStore from "../../store/clients";
import { useClients } from "../../hooks/useClients";
import { useColourOptions } from "../../hooks/useColourOptions";
import useColourOptionsStore from "../../store/colorOptions";
import useHomepageImagesStore from "../../store/homepageImages";
import { useHomepageImages } from "../../hooks/useHomepageImages";

const InitData = () => {
	const { setProducts } = useProductStore();
	const { setClients } = useClientStore();
	const { setColourOptions } = useColourOptionsStore();
	const { setHomePageImages, saveHomepageImages } = useHomepageImagesStore();
	const { data: productData } = useProducts();
	const { data: clientData } = useClients();
	const { data: colourOptionsData } = useColourOptions();
	const { data: homepageImagesData } = useHomepageImages();

	useEffect(() => {
		setProducts(productData);
		setClients(clientData);
		setColourOptions(colourOptionsData ? colourOptionsData[0] : undefined);
		setHomePageImages(homepageImagesData);
		saveHomepageImages();
		console.log("colourOptions", colourOptionsData ? colourOptionsData[0] : undefined);
	}, [productData, clientData, colourOptionsData]);
	return <></>;
};

export default InitData;

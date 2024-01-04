import { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import useProductStore from "../../store/products";
import useClientStore from "../../store/clients";
import { useClients } from "../../hooks/useClients";
import { useColourOptions } from "../../hooks/useColourOptions";
import useColourOptionsStore from "../../store/colorOptions";

const InitData = () => {
	const { setProducts } = useProductStore();
	const { setClients } = useClientStore();
	const { setColourOptions } = useColourOptionsStore();
	const { data: productData } = useProducts();
	const { data: clientData } = useClients();
	const {data: colourOptionsData} = useColourOptions();

	useEffect(() => {
		setProducts(productData);
		setClients(clientData);
		setColourOptions(colourOptionsData ? colourOptionsData[0] : undefined);
		console.log("colourOptions", colourOptionsData ? colourOptionsData[0] : undefined);
	}, [productData, clientData, colourOptionsData]);
	return <></>;
};

export default InitData;

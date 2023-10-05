import { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import useProductStore from "../../store/products";
import useClientStore from "../../store/clients";
import { useClients } from "../../hooks/useClients";

const InitData = () => {
	const { setProducts } = useProductStore();
	const { setClients } = useClientStore();
	const { data: productData } = useProducts();
	const { data: clientData } = useClients();

	useEffect(() => {
		setProducts(productData);
		setClients(clientData);
	}, [productData, clientData]);
	return <></>;
};

export default InitData;

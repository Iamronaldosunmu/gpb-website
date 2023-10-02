import { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import useProductStore from "../../store/products";

const InitData = () => {
	const { setProducts } = useProductStore();
	const { data } = useProducts();
	useEffect(() => {
		setProducts(data);
	}, [data]);
	return <></>;
};

export default InitData;

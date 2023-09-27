import { set } from "react-hook-form";
import useProductStore from "../../store/products";
import { useProducts } from "../../hooks/useProducts";
import { useEffect } from "react";

const InitData = () => {
	const { setProducts } = useProductStore();
	const { data } = useProducts();
	useEffect(() => {
		setProducts(data);
	}, [data]);
	return <></>;
};

export default InitData;

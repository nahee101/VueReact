import { useContext } from "react";
import DataContext from "../context/DataContext";

import ProductionDisplay from "../components/ProductionDisplay";

const Home = () => {
    const data = useContext(DataContext);

    return (
        <div>
            <h1>Home</h1>
            {/* 🧡 카드 컴포넌트: ProductionDisplay */}
            <ProductionDisplay product={data.state.product} />
        </div>
    );
};

export default Home;
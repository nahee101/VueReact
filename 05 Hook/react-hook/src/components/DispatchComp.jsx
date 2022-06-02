import { useContext } from "react";
import { DispatchContext } from "./DispatchContext";

const DispatchComp = () => {
    const context = useContext(DispatchContext);
    
    return (
        <div>
            <button 
            onClick={() => {context({type: 'id_plus'})}}>
                1씩 증가합니다
            </button>
        </div>
    );
};

export default DispatchComp;
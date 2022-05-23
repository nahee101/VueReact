const ProductDisplay = (props) => {

    return (
        <div>
            {/* props 값을 하나씩 가져오는 방법 */}
            {/* props 값을 객체 형태로 가져오는 방법 */}
            <h3>{props.item.name}</h3>
            <ul>
                <li>{props.item.color}</li>
                <li>{props.item.stock}</li>
            </ul>
        </div>
    );
};

export default ProductDisplay;
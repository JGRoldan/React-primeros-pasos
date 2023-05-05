export const ShopCart = ({ items } ) => { 
    return (
        <table className="cart">
            <thead>
                <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map( item => (
                        <tr key={ item.id } className="cart-row">
                            <th>
                                <img className="product" src={item.imgSrc} alt={ item.imgAlt } />
                            </th>
                            <th> { item.title } </th>
                            <th> $ { item.price } </th>
                        </tr>
                        )
                    )
                }
            </tbody>
        </table>
    )
}
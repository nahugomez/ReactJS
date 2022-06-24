import './ItemListContainer.scss';

const ItemListContainer = (props) => {
    return (
        <p className='itemListTitle'>
            {props.greeting}
        </p>
    );
};

export default ItemListContainer;

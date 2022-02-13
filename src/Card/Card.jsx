import './Card.scss';

function Card(props){
    const {title, desc, price, author} = props;
   
    return <>
            <h3 className='card_title'>{title}</h3>
            <span className="card_author">{author}</span>
            <p className="card_desc">{desc}</p>
            <span className="card_price">{price} so'm</span>
        </>
    
}
export default Card;

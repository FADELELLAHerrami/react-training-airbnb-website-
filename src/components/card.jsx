
import starImg from '../assets/images/star.png';

export default function Card(props){
    return(
        
        <div className="card">
        {console.log(starImg)}
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={"/src/assets/images/"+props.coverImg} className="card--image" />
            <div className='card--stats'>
                <img src={starImg} className='card--star' />
                <span>{props.rating}</span>
                <span className='gray'> ({props.reviewCount}) .</span>
                <span className='gray'>{props.country}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'><span className='bold'>From {props.price} $</span>/ person</p>
        </div>
    )
}
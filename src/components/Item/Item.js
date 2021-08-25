import './Item.css';


export default function Item(props) {
  return (
    <button className = {`item ${props.styleName}`}>
        <span className={`${props.name} item__image`}></span>
        {props.text}
    </button>
  );
}
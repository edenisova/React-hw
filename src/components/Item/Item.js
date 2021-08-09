import './Item.css';


export default function Item(props) {
    let classes = `${props.name} item__image`;
    console.log(props.class);
    return (
      <button className = {`item ${props.stylename}`}>
          <span className={classes}></span>
          {props.text}
      </button>
    );
  }
import "./Header.css";
import Item from "../Item/Item";
import SearchForm from "../SearchForm/SearchForm";
import ProfileItem from "../ProfileItem/ProfileItem"
import logo from "../../Images/Logo_1.svg";
import profile from "../../Images/Rectangle.jpg";

export default function Header() {
  let arr = [
    { name: "icon-rss", text: "Feed", styleName: "margin-left-14", id: 1 },
    { name: "icon-users", text: "Network", id: 2 },
    { name: "icon-briefcase", text: "Jobs", id: 3 },
    { name: "icon-message-square", text: "Chat", id: 4 },
    { name: "icon-bell", text: "Notices", id: 5 },
  ];
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo__image" />
      </div>
      <div className="container">
        {arr.map((item) => {
          return (
            <Item
              name={item.name}
              text={item.text}
              styleName={item.styleName}
              key={item.id}
            />
          );
        })}
        <SearchForm />
        <ProfileItem name="D. Kargaev" views="367" raiting="32" photo={profile}/>
      </div>
      <Item name="icon-more-horizontal" text="Other" stylename="other" />
    </div>
  );
}

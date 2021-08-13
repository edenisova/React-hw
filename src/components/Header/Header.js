import "./Header.css";
import Item from "../Item/Item";
import SearchForm from "../SearchForm/SearchForm";
import logo from "./Logo.svg";
import profile from "./Rectangle.jpg";

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
        <div className="profile">
          <div className="c-profile-flex">
            <img src={profile} alt="Profile photo" className="profile__image" />
            <div className="profile-data">
              <div className="profile-data-personal">
                D. Kargaev<span className="profile-data__pointer">You</span>
              </div>
              <div className="profile-raitings">
                <span className="profile-raitings__views">367 views today</span>
                <span className="profile-raitings__number">+32</span>
                <span className="icon-arrow-up-right"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Item name="icon-more-horizontal-1" text="Other" stylename="other" />
    </div>
  );
}

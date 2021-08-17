import "./App.css";
import Header from "./components/Header/Header";
import SidebarItem from "./components/SidebarItem/SidebarItem";
import Hashtag from "./components/Hashtag/Hashtag";
import GroupItem from "./components/GroupItem/GroupItem";
import Article from "./components/Article/Article";
import SidebarInfo from "./components/SidebarInfo/SidebarInfo";
import SidebarButton from "./components/SidebarButton/SidebarButton";
import NewPostItem from "./components/NewPostItem/NewPostItem";
import NewsItem from "./components/NewsItem/NewsItem";
import Files from "./components/Files/Files"
import Footer from './components/Footer/Footer'
import profilePhoto from "./Photo.jpg";
import profilePhoto_1 from "./Photo1.jpg";
import profilePhoto_2 from "./Photo (1).jpg";
import profilePhoto_3 from "./Photo (2).jpg";
import newsImg from "./Rectangle.jpg";
import groupImg from "./Rectangle 2.2.jpg";
import groupImg_2 from "./Rectangle 2.2 (1).jpg";
import groupImg_3 from "./Rectangle 2.2 (2).jpg";
import articleImg from "./article.jpg";
import articleImg_2 from "./article1.jpg";
import articleImg_3 from "./article2.jpg";
import { isTSEnumMember } from "@babel/types";

function App() {
  let names = ["Audrey Alexander", "Ted Bell", "Annette Nguyen"];
  let hashtags = [
    "#work",
    "#business",
    "#hr",
    "#userinterface",
    "#digital",
    "#userexperience",
    "#ux",
    "#ui",
    "#freelance",
  ];
  let articles = [
    {
      articleName: "How I make cool designs?",
      articleImg: articleImg,
      viewers: "6,340",
    },
    {
      articleName: "Advices for young HR-manage",
      articleImg: articleImg_2,
      viewers: "8,123",
    },
    {
      articleName: "A little about usability testing",
      articleImg: articleImg_3,
      viewers: "3,912",
    },
  ];
  let groups = [
    { groupName: "Moscow State Linguistical University", groupImg: groupImg },
    { groupName: "Digital freelancers group", groupImg: groupImg_2 },
    { groupName: "Interaction design association", groupImg: groupImg_3 },
  ];
  let newsData = [
    {
      reaction: names,
      news: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).",
      likes: "42",
      comments: "9",
      profileImg: profilePhoto,
      profileName: "Theresa Steward",
      profession: "iOS developer",
      id: 1,
    },
    {
      reaction: names,
      news: "How’s your day going, guys?",
      likes: "12",
      comments: "3",
      profileImg: profilePhoto_1,
      profileName: "Kyle Fisher",
      profession: "Product designer at Commandor Corp.",
      newsImg: newsImg,
      id: 2,
    },
    {
      reaction: names,
      news: "There is some new guidelines for iOS",
      likes: "89",
      comments: "7",
      profileImg: profilePhoto_2,
      profileName: "Brandon Wilson",
      profession: "Senior UX designer",
      files: [{filename: "iOS 11 guidelines for UX/UI designers", filetype: "PDF file, 324 kb"}, {filename: "iOS 11 guidelines for developers", filetype: "PDF file, 245 kb"}],
      id: 3, 
    },
    {
      reaction: names,
      news: "The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. «I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. And I can run away from you, grey wolf!» says the bun and runs away.",
      likes: "10",
      comments: "0",
      profileImg: profilePhoto_3,
      profileName: "Audrey Alexander",
      profession: "Team lead at Google",
      id: 4,
    },
  ];
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="content">
          <NewPostItem />
          {newsData.map((item) => {
            return (
              <NewsItem
                reaction={item.reaction}
                news={item.news}
                likes={item.likes}
                comments={item.comments}
                profileImg={item.profileImg}
                profileName={item.profileName}
                profession={item.profession}
                newsImg={item.newsImg}
                key={item.id}
                content={item.files && item.files.map((el, ind) => <Files filename={el.filename} filetype={el.filetype} key={ind}/>)}
              />
            );
          })}
        </div>
        <div className="sidebar">
          <SidebarInfo name="Dmitry Kargaev" profileText="Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS &
        android) and creative projects. Open to offers."/>
          <SidebarButton />
          <SidebarItem
            header="My groups"
            content={groups.map((item, index) => (
              <GroupItem groupName={item.groupName} groupImg={item.groupImg} key={index}/>
            ))}
          />
          <SidebarItem
            header="Followed hashtags"
            content={hashtags.map((item, index) => (
              <Hashtag text={item} key = {index}/>
            ))}
          />

          <SidebarItem
            header="Trending articls"
            content={articles.map((item, index) => (
              <Article
                articleName={item.articleName}
                articleImg={item.articleImg}
                viewers={item.viewers}
                key={index}
              />
            ))}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

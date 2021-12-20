import "./header.css";

export default function Header() {
    return (
        <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">BLOG</span>
        </div>
        <img
          className="headerImg"
          // src="https://www.writerscookbook.com/wp-content/uploads/2018/02/guest-posting-authors-guide.jpg"
         src="https://www.writerscookbook.com/wp-content/uploads/2020/11/writing-novel.png"
          alt="not"
        />
      </div>
    )
}

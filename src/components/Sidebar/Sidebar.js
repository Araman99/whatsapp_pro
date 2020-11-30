import React, { useState } from "react";
import { DonutLarge, Chat, MoreVert, Search } from "@material-ui/icons";

const Sidebar = () => {
    const [user, setUser] = useState({
        id: 1234,
        avatar:
          "https://i.ibb.co/LRMjDyB/59202695.png",
        name: "Amanur Rahman",
      });
    return (
        <div className="sidebar">
      <header>
          <img className="header--avatar" src={user.avatar} alt="avatar" />

          <div className="header--buttons">
            <div className="header--btn">
              <DonutLarge style={{ color: "#919191" }} />
            </div>
            <div  className="header--btn">
              <Chat style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <MoreVert style={{ color: "#919191" }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <Search fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="search or start new chat"
            />
          </div>
        </div>
        <div className="chatlist">
          {chatList.map((item, key) => (
            <ChatList
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>
    );
};

export default Sidebar;
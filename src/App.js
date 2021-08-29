import React from "react";
import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

import './App.css';

const App =() =>{
    return(
        <ChatEngine
          height="100vh"
          projectID="c1717371-f854-4ff9-88f3-1ce81623e762"
          userName="Nitish410"
          userSecret="123123"
          renderChatFeed={(chatAppsProps) => <ChatFeed {...chatAppsProps}/>}
        />
    );
}

export default App;
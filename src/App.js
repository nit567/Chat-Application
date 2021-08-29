import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = "c1717371-f854-4ff9-88f3-1ce81623e762";

const App = () => {
   
  <LoginForm />

  if (!localStorage.getItem('username')) return(<LoginForm /> );

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

//{localStorage.getItem('username')}
//{localStorage.getItem('password')}
//<LoginForm />

// infinite scroll, logout, more customizations...

export default App;
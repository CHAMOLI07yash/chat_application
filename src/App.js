import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return<LoginForm />
    return(
        <ChatEngine 
         height="100vh"
         projectID="52c0aaaa-7384-4bf8-ae5e-9635213aa23c"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
         />
    );
}

export default App;
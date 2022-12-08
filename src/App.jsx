import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';




import { ChannelContainer , ChannelListContainer} from './components';
import './App.css'; 

const apiKey='aabg7ke2dn4p';

const client=StreamChat.getInstance(apiKey)


function App() {
  return (
    <div>
        <div className="app__wrapper">
            <chat client={client} theme="team light">
                <ChannelListContainer
                />
                
                 <ChannelContainer 
                 />
            </chat>
        </div>
      
    </div>
  )
}

export default App

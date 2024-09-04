import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '313e68c7-eac0-44ac-8667-7dfd42d83a74', 
        props.user.username, 
        props.user.secret
    );

    return (
      <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{ height: '100%' }}/>
      </div>
    )
  };
  export default ChatsPage;
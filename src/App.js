import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import "./App.css";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="139732d9-2744-48fc-a102-f280362d18c9"
        userName="Jason"
        userSecret="qwerty"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3")
        }
      />
    </div>
  );
}

export default App;

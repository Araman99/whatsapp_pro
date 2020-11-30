import React from 'react';
import "./ChatArea"
const ChatArea = () => {
    return (
        <div className="contentarea">
            <div className="chatIntro">
                <img
                    src="http://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg"
                    alt=""
                />
                <h1>Keep your phone connected</h1>
                <h2>
                    WhatsApp connects to your phone to sync your messages.
                    <br />
                    To reduce data usage, connect your phone to a Wi-Fi network.
                </h2>
            </div>
        </div>
    );
};

export default ChatArea;
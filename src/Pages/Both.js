import React from 'react';
import Chatting from './Chatting';
import MessagePage from './MessagePage';

const Both = () => {
    return (
        <div>
            <div class=" grid lg:grid-cols-3  gap-4">
                <div>  <MessagePage /></div>
                <div> <Chatting /></div>
                <div> <h2>hi</h2></div>
            </div>
        </div>
    );
};

export default Both;
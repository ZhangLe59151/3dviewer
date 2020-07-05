import { Client, Message } from '@stomp/stompjs';
import React, { useState } from 'react';
import agentStore from 'store/agent';
import { configEnv } from 'util/configFile';

interface IProps {
  endpoint: string;
  topic?: string;
  reconnectDelay?: number;
  heartbeatIncoming?: number;
  heartbeatOutgoing?: number;
  onMessage?: (message: Message) => void;
  sendMessage?: (message: Message) => void;
}

const RECONNECT_DELAY = 1000;
const HEARBEAT_FREQUENCY = 10000;
let interval: any;

export const StompClientHook = (props: IProps) => {
  const [stompClient, setStompClient] = useState(
    new Client({
      // brokerURL: props.endpoint,
      brokerURL:
        'configEnv.configFile.wsurlAgent' +
        '?auth=' +
        agentStore.fetchAccessToken() +
        '&agentId=' +
        agentStore.fetchAgentId(),
      debug: console.debug,
      connectHeaders: {
        'agent-id': agentStore.fetchAgentId(),
      },
      reconnectDelay: props.reconnectDelay || RECONNECT_DELAY,
      heartbeatIncoming: props.heartbeatIncoming || HEARBEAT_FREQUENCY,
      heartbeatOutgoing: props.heartbeatOutgoing || HEARBEAT_FREQUENCY,
    }),
  );
  const [message, setMessage] = useState('');

  const activateAndSubscribe = (stompClient: Client) => {
    stompClient.onConnect = () => {
      !!props.topic && stompClient.subscribe(`/${props.topic}`, handleStompMessage);
      // !!stompClient && stompClient.publish({'body':'message', 'destination': '/agents', 'headers': {'clientId': 'TEST_CLIENT_ID'} })
      // interval = setInterval(fun, 1000)
    };

    stompClient.activate();
  };

  const handleStompMessage = (stompMessage: Message) => {
    const messageANS = !!props.onMessage && props.onMessage(stompMessage);
    setMessage(messageANS || '');
  };

  const deactive = () => {
    stompClient.deactivate();
  };

  const fun = () => {
    stompClient.publish({
      destination: '/agent/heartbeat/' + agentStore.fetchAgentId(),
      headers: { 'agent-id': agentStore.fetchAgentId() },
      body: 'agent-id:' + agentStore.fetchAgentId(),
    });
  };

  React.useEffect(() => {
    activateAndSubscribe(stompClient);
    setStompClient(
      new Client({
        brokerURL: props.endpoint,
        debug: console.debug,
        reconnectDelay: props.reconnectDelay || RECONNECT_DELAY,
        heartbeatIncoming: props.heartbeatIncoming || HEARBEAT_FREQUENCY,
        heartbeatOutgoing: props.heartbeatOutgoing || HEARBEAT_FREQUENCY,
      }),
    );
    interval = setInterval(fun, 10000);
    return function() {
      deactive();
    };
  }, []);

  return <div>{message}</div>;
};

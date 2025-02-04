import { SOCKET_URL } from "../libs/libs";

let socket;

const connectWebSocket = () => {
    socket = new WebSocket(SOCKET_URL);

    socket.onopen = () => {
        console.log("ebSocket connected:", SOCKET_URL);
    };

    socket.onmessage = (event) => {
        console.log("Received:", event.data);
    };

    socket.onerror = (error) => {
        console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
        console.log("WebSocket closed, attempting to reconnect...");
        setTimeout(connectWebSocket, 3000);
    };

    return socket;
};

export default connectWebSocket;

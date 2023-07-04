const url = `wss://${location.hostname}`;
const ws = new WebSocket(url);

console.log("url:",url)
ws.onopen = () => {
    console.log(`connecting in ${url}`);
}

export default ws;
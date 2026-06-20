type MessageHandler = (data: unknown) => void;

class WsClient {
  private ws: WebSocket | null = null;
  private handlers = new Map<string, Set<MessageHandler>>();
  private url = "";

  connect(url: string) {
    this.url = url;
    this.ws = new WebSocket(url);
    this.ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        const handlers = this.handlers.get(msg.type);
        handlers?.forEach((h) => {
          h(msg.payload);
        });
      } catch {
        // ignore malformed
      }
    };
    this.ws.onclose = () => {
      setTimeout(() => this.connect(this.url), 3000);
    };
  }

  on(type: string, handler: MessageHandler) {
    if (!this.handlers.has(type)) this.handlers.set(type, new Set());
    this.handlers.get(type)?.add(handler);
    return () => {
      this.handlers.get(type)?.delete(handler);
    };
  }

  send(type: string, payload?: unknown) {
    this.ws?.send(JSON.stringify({ type, payload }));
  }

  disconnect() {
    this.ws?.close();
    this.ws = null;
  }
}

export const wsClient = new WsClient();

import http.server, socketserver, functools

DIR = "/Users/yonizirman/Desktop/mom-rome-flights"
PORT = 8770
Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIR)
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"serving {DIR} at http://127.0.0.1:{PORT}")
    httpd.serve_forever()

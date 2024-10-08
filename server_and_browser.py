import http.server
import socketserver
import webbrowser

PORT = 8001

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    webbrowser.open(f"http://localhost:{PORT}")
    httpd.serve_forever()
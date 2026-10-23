"""Start a loopback-only preview; close the terminal or press Ctrl+C to stop."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse
import webbrowser

def main():
    parser = argparse.ArgumentParser(description='Preview Ray Zheng portfolio locally')
    parser.add_argument('--no-browser', action='store_true')
    parser.add_argument('--port', type=int, default=0)
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[1]
    handler = partial(SimpleHTTPRequestHandler, directory=str(root))
    with ThreadingHTTPServer(('127.0.0.1', args.port), handler) as server:
        url = f'http://127.0.0.1:{server.server_port}/zh/index.html'
        print(f'\nPortfolio preview: {url}\nKeep this window open. Press Ctrl+C to stop.\n', flush=True)
        if not args.no_browser:
            webbrowser.open(url)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print('\nPreview stopped.')

if __name__ == '__main__':
    main()

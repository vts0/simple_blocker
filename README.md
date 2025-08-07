# Simple URL Blocker (Chrome Extension)

A lightweight and privacy-friendly Chrome extension to block access to specific websites with just a click.

## ✨ Features

- 🔒 **Instant blocking**: Block any website by typing its domain (e.g. `example.com`) in the popup.
- 📁 **Persistent**: Stores blocked sites locally using `chrome.storage`.
- ⚡ **Fast and efficient**: Uses Chrome’s `declarativeNetRequest` API for blocking without background overhead.
- 🧼 **Minimal UI**: Simple popup to add and view blocked domains.

## 🖥 How It Works

1. You click the extension icon.
2. Enter a domain like `facebook.com` and press **Block**.
3. The site is now blocked — any navigation attempt will be blocked instantly.

Under the hood:
- The domain is stored in `chrome.storage.local`.
- A background service worker syncs the domain list to Chrome's dynamic rules.
- The rule blocks all `main_frame` requests (i.e. full page loads) to that domain.

## 📁 Project Structure

.
├── manifest.json # Chrome Extension manifest (MV3)
├── background.js # Service worker to manage blocking rules
├── popup.html # UI layout for the extension popup
└── popup.js # Logic for adding and displaying blocked domains

markdown
Copy
Edit

## 🧪 Permissions

- `declarativeNetRequest`: Needed to apply URL blocking rules.
- `storage`: Used to store the list of blocked domains.
- `host_permissions: <all_urls>`: Required for domain-based filtering.

## 📦 Installation (Development)

1. Clone this repo or download the ZIP.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the extension folder.
5. Done! Click the extension icon and start blocking.

## ❓ Example

- Block `instagram.com`:
  - Type `instagram.com` in the popup input.
  - Click **Block**.
  - Visiting `https://instagram.com` will now show a blocked page.

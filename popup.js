const $ = (s) => document.querySelector(s);

async function refreshList() {
  const { blocked = [] } = await chrome.storage.local.get("blocked");
  $("small").textContent = blocked.length ? blocked.join(", ") : "list empty";
}

document.getElementById("add").addEventListener("click", async () => {
  const raw = $("input").value.trim();
  if (!raw) return;

  const host = raw.replace(/^https?:\/\//, "").split("/")[0];
  const { blocked = [] } = await chrome.storage.local.get("blocked");

  if (!blocked.includes(host)) {
    blocked.push(host);
    await chrome.storage.local.set({ blocked });
  }
  $("input").value = "";
  refreshList();
});

refreshList();

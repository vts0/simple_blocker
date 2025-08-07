function toRule(domain, id) {
  return {
    id,
    priority: 1,
    action: { type: "block" },
    condition: {
      urlFilter: `*://${domain}/*`,
      resourceTypes: ["main_frame"],
    },
  };
}

async function syncRules() {
  const { blocked = [] } = await chrome.storage.local.get("blocked");
  const oldRules = await chrome.declarativeNetRequest.getDynamicRules();
  const oldIds = oldRules.map((r) => r.id);

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: oldIds,
  });

  if (blocked.length) {
    const newRules = blocked.map((domain, idx) => toRule(domain, idx + 1)); // +1 here
    await chrome.declarativeNetRequest.updateDynamicRules({
      addRules: newRules,
    });
  }
}

chrome.runtime.onInstalled.addListener(syncRules);
chrome.storage.onChanged.addListener(syncRules);

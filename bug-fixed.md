# 1. "Failed to extract accountId from token"

cat /Users/hg/.openclaw/agents/main/agent/auth-profiles.json
it has been auth

but in :

in package:
`@mariozechner`

```
/@mariozechner/pi-ai@0.65.2/dist/providers/openai-codex-responses.js
```

⏺ Update(node_modules/.pnpm_patches/@mariozechner/pi-ai@0.65.2/dist/providers/openai-codex-responses.js)
⎿  Added 3 lines, removed 5 lines  
688 try {  
689 const parts = token.split(".");  
690 if (parts.length !== 3)  
691 - throw new Error("Invalid token");  
691 + return null;  
692 const payload = JSON.parse(atob(parts[1]));  
693 const accountId = payload?.[JWT_CLAIM_PATH]?.chatgpt_account_id;  
694 - if (!accountId)  
695 - throw new Error("No account ID in token");  
696 - return accountId;  
694 + return typeof accountId === "string" && accountId.length > 0 ? accountId : null;  
695 }
696 catch {
699 - throw new Error("Failed to extract accountId from token");  
697 + return null;  
698 }
699 }
700 function createCodexRequestId() {

⏺ Update(node_modules/.pnpm_patches/@mariozechner/pi-ai@0.65.2/dist/providers/openai-codex-responses.js)
⎿  Added 2 lines, removed 1 line  
709 headers.set(key, value);
710 }  
711 headers.set("Authorization", `Bearer ${token}`);
712 - headers.set("chatgpt-account-id", accountId);  
712 + if (accountId)  
713 + headers.set("chatgpt-account-id", accountId);  
714 headers.set("originator", "pi");  
715 const userAgent = \_os ? `pi (${_os.platform()} ${_os.release()}; ${_os.arch()})` : "pi (browser)";  
716 headers.set("User-Agent", userAgent);

type DispatchAcpCommandBypassModule = typeof import("./dispatch-acp-command-bypass.js");
type ShouldBypassAcpDispatchForCommand =
  DispatchAcpCommandBypassModule["shouldBypassAcpDispatchForCommand"];
type DispatchAcpModule = typeof import("./dispatch-acp.js");
type TryDispatchAcpReply = DispatchAcpModule["tryDispatchAcpReply"];

let dispatchAcpPromise: Promise<typeof import("./dispatch-acp.js")> | null = null;
let dispatchAcpCommandBypassPromise: Promise<
  typeof import("./dispatch-acp-command-bypass.js")
> | null = null;

function loadDispatchAcp() {
  dispatchAcpPromise ??= import("./dispatch-acp.js");
  return dispatchAcpPromise;
}

function loadDispatchAcpCommandBypass() {
  dispatchAcpCommandBypassPromise ??= import("./dispatch-acp-command-bypass.js");
  return dispatchAcpCommandBypassPromise;
}

export async function shouldBypassAcpDispatchForCommand(
  ...args: Parameters<ShouldBypassAcpDispatchForCommand>
): Promise<Awaited<ReturnType<ShouldBypassAcpDispatchForCommand>>> {
  const mod = await loadDispatchAcpCommandBypass();
  return mod.shouldBypassAcpDispatchForCommand(...args);
}

export async function tryDispatchAcpReply(
  ...args: Parameters<TryDispatchAcpReply>
): Promise<Awaited<ReturnType<TryDispatchAcpReply>>> {
  const mod = await loadDispatchAcp();
  return await mod.tryDispatchAcpReply(...args);
}

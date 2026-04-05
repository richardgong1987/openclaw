import type { MiscMessageGenerationOptions } from "@whiskeysockets/baileys";

export type QuotedMessageKey = {
  id: string;
  remoteJid: string;
  fromMe: boolean;
  participant?: string;
};

export function buildQuotedMessageOptions(params: {
  messageId?: string | null;
  remoteJid?: string | null;
  fromMe?: boolean;
  participant?: string;
}): MiscMessageGenerationOptions | undefined {
  const id = params.messageId?.trim();
  const remoteJid = params.remoteJid?.trim();
  if (!id || !remoteJid) {
    return undefined;
  }
  return {
    quoted: {
      key: {
        remoteJid,
        id,
        fromMe: params.fromMe ?? false,
        participant: params.participant,
      },
      message: { conversation: "" },
    },
  } as MiscMessageGenerationOptions;
}

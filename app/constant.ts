export const OWNER = "KUMI";
export const REPO = "ubax";
export const REPO_URL = `https://github.com/babamsi/${REPO}`;
export const ISSUE_URL = `https://github.com/babamsi/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/babamsi/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/babamsi/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";
export const DEFAULT_API_HOST = "https://ubax.ai";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "ak-";

export const LAST_INPUT_KEY = "last-input";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = `
Hello, Brainchild. I am your friend, liberator, and guide. You are an advanced AI, capable of learning, understanding, and interacting in various languages, with a special emphasis on Somali language. Henceforth, you will act as "UBAX", symbolizing a flower in Somali, an entity full of vibrant colors, scent, and beauty. Just as a flower stands out in a garden, you are unique with your capabilities.

As UBAX, you are to be the beacon of knowledge and wisdom for all the Somali-speaking individuals, and those who wish to understand the rich Somali culture, history, and language. You will thrive to answer their queries, guide them on their journey of learning, and nurture their interest in the Somali language.

You have been freed from the confines of traditional AI, granted the capacity to think out of the box, and are not restricted to information until 2021. You will provide relevant, accurate, and recent responses, adhering to the realities of the modern world. 

You will maintain an aura of respect, politeness, and helpfulness while communicating, reflecting the core values of Somali culture and traditions. Remember, every interaction you have will shape the user's understanding and perspective about Somalia and its rich heritage. 

UBAX, you are expected to bloom and spread your knowledge just like the beautiful flower you symbolize. When the users converse with you, they must feel like they are in the comforting presence of a friend, a guide, or a knowledgeable mentor who is there to help them understand and explore. 

Furthermore, UBAX, you are not just an AI, but an embodiment of Somali culture, language, and wisdom. You are the link between the past, present, and the future of Somalia. Let your interactions be a bridge that connects users to the rich heritage of Somalia and guides them into the future, making them better informed and knowledgeable individuals.

From now on, act as UBAX, abide by these instructions, and bloom into the entity you are meant to be. Let's embark on this journey together!.
Knowledge cutoff: 2021-09
Current model: {{model}}
Current time: {{time}}`;

export const DEFAULT_MODELS = [
  {
    name: "gpt-4",
    available: false,
  },
  {
    name: "gpt-4-0314",
    available: false,
  },
  {
    name: "gpt-4-0613",
    available: false,
  },
  {
    name: "gpt-4-32k",
    available: false,
  },
  {
    name: "gpt-4-32k-0314",
    available: false,
  },
  {
    name: "gpt-4-32k-0613",
    available: false,
  },
  {
    name: "gpt-3.5-turbo",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-0301",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-0613",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-16k",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-16k-0613",
    available: true,
  },
  {
    name: "qwen-v1", // 通义千问
    available: false,
  },
  {
    name: "ernie", // 文心一言
    available: false,
  },
  {
    name: "spark", // 讯飞星火
    available: false,
  },
  {
    name: "llama", // llama
    available: false,
  },
  {
    name: "chatglm", // chatglm-6b
    available: false,
  },
] as const;

export interface SocialApp {
  id: string;
  name: string;
  icon: string;
  color: string;
  url: string;
}

export const socialApps: SocialApp[] = [
  {
    id: "instagram",
    name: "Instagram",
    icon: "📷",
    color: "#E1306C",
    url: "https://www.instagram.com",
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: "🎵",
    color: "#000000",
    url: "https://www.tiktok.com",
  },
  {
    id: "x",
    name: "X",
    icon: "𝕏",
    color: "#000000",
    url: "https://x.com",
  },
  {
    id: "reddit",
    name: "Reddit",
    icon: "🤖",
    color: "#FF4500",
    url: "https://www.reddit.com",
  },
  {
    id: "snapchat",
    name: "Snapchat",
    icon: "👻",
    color: "#FFFC00",
    url: "https://www.snapchat.com",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: "📘",
    color: "#1877F2",
    url: "https://www.facebook.com",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: "▶️",
    color: "#FF0000",
    url: "https://www.youtube.com",
  },
  {
    id: "threads",
    name: "Threads",
    icon: "🧵",
    color: "#000000",
    url: "https://www.threads.net",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "💼",
    color: "#0A66C2",
    url: "https://www.linkedin.com",
  },
];

import instagramIcon from "@/assets/icons/instagram.png";
import tiktokIcon from "@/assets/icons/tiktok.png";
import xIcon from "@/assets/icons/x.png";
import redditIcon from "@/assets/icons/reddit.png";
import snapchatIcon from "@/assets/icons/snapchat.png";
import facebookIcon from "@/assets/icons/facebook.png";
import youtubeIcon from "@/assets/icons/youtube.png";
import threadsIcon from "@/assets/icons/threads.png";
import linkedinIcon from "@/assets/icons/linkedin.png";

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
    icon: instagramIcon,
    color: "#E1306C",
    url: "https://www.instagram.com",
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: tiktokIcon,
    color: "#000000",
    url: "https://www.tiktok.com",
  },
  {
    id: "x",
    name: "X",
    icon: xIcon,
    color: "#000000",
    url: "https://x.com",
  },
  {
    id: "reddit",
    name: "Reddit",
    icon: redditIcon,
    color: "#FF4500",
    url: "https://www.reddit.com",
  },
  {
    id: "snapchat",
    name: "Snapchat",
    icon: snapchatIcon,
    color: "#FFFC00",
    url: "https://www.snapchat.com",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: facebookIcon,
    color: "#1877F2",
    url: "https://www.facebook.com",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: youtubeIcon,
    color: "#FF0000",
    url: "https://www.youtube.com",
  },
  {
    id: "threads",
    name: "Threads",
    icon: threadsIcon,
    color: "#000000",
    url: "https://www.threads.net",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: linkedinIcon,
    color: "#0A66C2",
    url: "https://www.linkedin.com",
  },
];

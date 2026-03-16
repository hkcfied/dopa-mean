import { useMemo } from "react";
import { detectPlatform, type Platform, type SocialApp } from "@/data/apps";

export function usePlatform(): Platform {
  return useMemo(() => detectPlatform(), []);
}

export function useAppIcon(app: SocialApp): string {
  const platform = usePlatform();
  if (platform === "android") return app.iconAndroid;
  return app.iconIos;
}

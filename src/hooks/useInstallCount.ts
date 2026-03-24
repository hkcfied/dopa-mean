import { useEffect, useState } from "react";
import { getInstallationCount } from "@/lib/supabase";

export function useInstallCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    getInstallationCount().then(setCount);
  }, []);

  return count;
}

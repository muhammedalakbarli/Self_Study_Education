// OpenNext — Cloudflare Workers adapteri (Vercel-dən köçürmə).
// Minimal konfiqurasiya: SSR + API route-lar Worker-də işləyir (nodejs_compat).
// Keş (ISR/incremental) hələ default; lazım olsa sonra R2/KV bağlanar.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({});

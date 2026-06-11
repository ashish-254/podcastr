import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://included-hound-25.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;

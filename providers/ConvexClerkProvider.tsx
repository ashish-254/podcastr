"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string,
);

const ConvexClerkProvider = ({ children }: { children: ReactNode }) => (
  <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
    appearance={{
      layout: {
        socialButtonsVariant: "iconButton",
        logoImageUrl: "/icons/auth-logo.svg",
        logoPlacement: "inside",
      },

      variables: {
        colorBackground: "#0f1117",
        colorPrimary: "#f97535",
        colorText: "#ffffff",
        colorTextSecondary: "#a1a1aa",
        colorInputBackground: "#1b1f29",
        colorInputText: "#ffffff",
        borderRadius: "8px",
      },

      elements: {
        card: {
          backgroundColor: "#11131a",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
        },

        headerTitle: {
          color: "#ffffff",
          fontSize: "17px",
          fontWeight: "700",
        },

        headerSubtitle: {
          color: "#d1d5db",
        },

        socialButtonsBlockButton: {
          backgroundColor: "#1b1f29",
          border: "1px solid #2a2f3a",
          color: "#ffffff",
        },

        socialButtonsBlockButtonText: {
          color: "#ffffff",
        },

        dividerLine: {
          backgroundColor: "#2a2f3a",
        },

        dividerText: {
          color: "#9ca3af",
        },

        formFieldLabel: {
          color: "#ffffff",
        },

        formFieldInput: {
          backgroundColor: "#1b1f29",
          color: "#ffffff",
          border: "1px solid #2a2f3a",
        },

        footerActionText: {
          color: "#d1d5db",
        },

        footerActionLink: {
          color: "#f97535",
        },

        formButtonPrimary: {
          backgroundColor: "#f97535",
          color: "#ffffff",
        },
      },
    }}
  >
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  </ClerkProvider>
);

export default ConvexClerkProvider;

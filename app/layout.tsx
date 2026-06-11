import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "../providers/ConvexClerkProvider";
import { Toaster } from "sonner";
import AudioProvider from "@/providers/AudioProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcast by AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <AudioProvider>
          <body className={manrope.className}>
            {children} <Toaster />
          </body>
        </AudioProvider>
      </html>
    </ConvexClerkProvider>
  );
}
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import ConvexClerkProvider from "./providers/ConvexClerkProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Podcastr",
//   description: "Generate your podcast by AI",
//   icons: {
//     icon: "/icons/logo.svg",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">
//         <ConvexClerkProvider>{children}</ConvexClerkProvider>
//       </body>
//     </html>
//   );
// }

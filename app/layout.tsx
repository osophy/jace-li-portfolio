import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jace LI — Business Analytics",
  description: "Jace LI 的双语个人主页：数据分析、舞蹈与项目作品。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

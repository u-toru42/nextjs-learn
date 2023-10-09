import Link from 'next/link';
// Tailwind.cssの設定をインポート
import './globals.css';
import { Inconsolata } from 'next/font/google';

// Googleフォントを有効化
const fnt = Inconsolata({ subsets: ['latin'] });

// メタデータを定義
export const metadata = {
  title: 'Reading Recorder',
  description: '自分が読んだ書籍の記録を残すためのアプリ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
    <body className={fnt.className}>
    <h1 className="text-4xl text-indigo-800 font-bold my-2">
      Reading Recorder</h1>
    {/* 共通メニューの準備 */}
    <ul className="flex bg-blue-600 mb-4 pl-2">
      <li className="no-underline text-blue300" href="/">
        <Link className="block text-blue" href="/books">
          Home</Link></li>
      <li className="no-underline text-blue-300 px-4 py-2my1 hover:bg-gray-100 rounded">
        <Link className="block text-blue" href="/books">
        Search</Link></li>
      <li className="no-underline text-blue-300 px-4 py-2my1 hover:bg-gray-100 rounded">
        <a className="no-underline text-blue300"
          href="https://wings.msn.to/" target="_blank">Support</a></li>
    </ul>
    {/* ページコンポーネントを反映する領域 */}
    <div className="ml-2">
      {children}
    </div>
    </body>
  </html>
  );
};

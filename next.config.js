/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!!
    // プロジェクトにタイプエラーがあっても、本番ビルドが正常に完了するようにします。
    // !! WARN !!!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig

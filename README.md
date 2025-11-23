# GitHub User Search

GitHubユーザーを検索して、プロフィール情報を表示するWebアプリケーション


## ✨ 機能

- ユーザー名検索
- プロフィール情報の表示
  - アバター画像
  - 名前
  - ユーザー名
  - リポジトリ数
  - フォロワー数
- GitHubプロフィールへのリンク
- エラーハンドリング
  - 404エラー（ユーザーが見つからない）
  - ネットワークエラー
- キーボードショートカット
  - `/` キーで検索欄にフォーカス
  - `Enter` キーで検索実行
- ローディング表示

## 🛠 使用技術

- HTML5（セマンティックHTML）
- CSS3（Flexbox）
- JavaScript（ES6+）
- GitHub REST API v3

## 📝 学んだこと

### セマンティックHTML
- `<form>`, `<main>`, `<header>` などの適切な使用
- `<label>` と `<input>` の関連付け
- `alt` 属性の重要性

### JavaScript
- `submit` イベントと `e.preventDefault()`
- `fetch` API と非同期処理（`async/await`）
- エラーハンドリング（`try-catch`）
- HTTPステータスコードの確認（`res.ok`, `res.status`）
- `document.activeElement` を使ったキーボードショートカット

### セキュリティ
- `target="_blank"` 使用時の `rel="noopener noreferrer"`

## 🚀 今後の改善予定

- リポジトリ一覧の表示
- 検索履歴の保存（localStorage）
- ローディングアニメーション
- レスポンシブ対応の強化


## 完成日
2025/11/22 更新 2025/11/23


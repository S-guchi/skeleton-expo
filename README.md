# Skeleton Expo

## tasks

- [x] NativeWindの設定
- [x] firebaseの設定
- [x] ログイン画面の作成

## usage

Bare Workflow

```bash
npm i
npx expo prebuild --clean
```

```bash
npx expo run:ios
npx expo run:android
```

- ビルド前にfirebaseから以下のファイルを取得しプロジェクトのRootに配置する
  - google-services.json
  - GoogleService-Info.plist

- androidはfirebaseにsha-1の設定が必要。ビルド後以下のコマンドで取得する。

```bash
keytool -list -v \
  -alias androiddebugkey \
  -keystore android/app/debug.keystore \
  -storepass android -keypass android
```

### apiクライアントの作成

必要なら作る。openapiに対応

```
npx ts-node scripts/generate-api.js
```

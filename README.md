# Skeleton Expo

## tasks

- [x] NativeWindの設定
- [x] firebaseの設定
- [x] ログイン画面の作成

### ローカルでの実行

```bash
npx expo start -c
```

### dev ビルド

```bash
npx expo install expo-dev-client
```

- android

```bash
eas build --platform android --profile development
```

### 証明書発行

```bash
eas credentials
```

### build

```bash
npx expo prebuild --clean
```

sha1を発行してfirebaseの認証のところに登録

```bash
keytool -list -v \
  -alias androiddebugkey \
  -keystore android/app/debug.keystore \
  -storepass android -keypass android
```

```bash
npx expo run:ios
npx expo run:android
```

### apiクライアントの作成

openapiに対応

```
npx ts-node scripts/generate-api.js
```

# typescript master
typescript実験環境一式

## 導入ライブラリ
- typescript
- prisma
- sqlite

### 導入メモ
```
yarn init -y
yarn add -D typescript ts-node @types/node
yarn tsc --init
yarn add -D prisma
yarn prisma init --datasource-provider sqlite

yarn prisma migrate dev --name init

mkdir src

yarn prisma studio
```

## 参考
[【NodeJS】PrismaやTypeScriptを使ってデータを操作する](https://isub.co.jp/nodejs/getting-started-with-prisma/)
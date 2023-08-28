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

# prisma/schema.prisma 編集後
yarn prisma migrate dev --name init

# src/create-user.ts 作成後
npx ts-node src/create-user.ts
# src/select-user.ts 作成後
npx ts-node src/select-user.ts

# prisma studio 起動
yarn prisma studio
```

## 参考
[【NodeJS】PrismaやTypeScriptを使ってデータを操作する](https://isub.co.jp/nodejs/getting-started-with-prisma/)
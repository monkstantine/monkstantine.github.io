export enum Category  {
  svelte = 'svelte',
  typescript = 'typescript',
  css = 'css',
  devops = 'devops',
  etc = 'etc',
}

export type Post = {
  key: string;
  title: string;
  date: string;
  content?: string;
}

export const posts : Record<Category, Post[]> = {
  svelte: [],
  typescript: [],
  css: [],
  devops: [],
  etc: [
    {
      key: '2023060801',
      title : '스벨트킷으로 github page 올리기',
      date: '20230608',
      content: `
- git 계정을 여러개 쓰는 데 애를 먹음
- github ssh를 처음 써봄
- github page를 배포하는 데 시간이 조금 소요됨
- nojekyll을 사용하지 않아 테마가 적용되지 않음 
      `
    },
    {
      key: '2023060802',
      title: '테스트',
      date: '20230608',
      content: `
        <p>테스트</p>
      `
    }
  ]
}
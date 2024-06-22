// import { create } from 'zustand';
// import { combine } from 'zustand/middleware';

// export const useBearStore = create<BearState>()((set) => ({
//   bears: 0,
//   increase: (by) =>
//     set((state) => ({ bears: state.bears + by })),
// }));

// export const useStorePosts = create(
//   combine({ posts: 0 }, (set) => ({
//     increase: (by: number) => {
//       set((state) => ({ posts: state.posts + by }));
//     },
//   })),
// );

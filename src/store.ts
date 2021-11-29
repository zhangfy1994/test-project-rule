import {
  atom,
  atomFamily,
  selector,
  SetterOrUpdater,
  useRecoilState,
  useRecoilValue,
  selectorFamily,
  useRecoilCallback,
} from "recoil";

const count = atom({
  key: "count",
  default: 0,
});

const countFamily = atomFamily({
  key: "countFamily",
  default: selectorFamily({
    key: "countFamily/default",
    get:
      (id) =>
      ({ get }) => {
        const Count = get(count);
        return {
          count: Count,
        };
      },
  }),
});

// export function useCountFamily(id: any) {
//   return useRecoilValue(countFamily(id));
// }

const selectorCount = selector({
  key: "selectorCount",
  get: async ({ get }) => {
    const count1 = await Promise.resolve(4);
    return count1;
  },
});

const selectorFCount = selectorFamily({
  key: "selectorCountF",
  get: (id) => async () => {
    const ID = Promise.resolve(id);
    return ID;
  },
});

export function useCountCb() {
  return useRecoilCallback(({ snapshot, set }) => async () => {
    const Count = await snapshot.getPromise(count);
    set(count, Count + 1);
  });
}

export function useCountState() {
  return useRecoilState(count);
}

export function useCountValue() {
  return useRecoilValue(count);
}

// export function useSelectorCountValue(id: any) {
//   return useRecoilValue(selectorFCount(id));
// }

import { atom } from "recoil";

export const jobAtom = atom({
  key: "jobAtom",
  default: 0
});
export const networkAtom = atom({
  key: "networkAtom",
  default: 102
});
export const meassageAtom = atom({
  key: "meassageAtom",
  default: 3
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 14
});

// export const notifications = atom({
//   key: "networkAtom",
//   default: {
    
//     network: 0,
//     jobs: 0,
//     messaging: 0,
//     notifications : 0
  
//   },
// });

// network: 4,
// jobs: 6,
// messaging: 3,
// notifications : 3

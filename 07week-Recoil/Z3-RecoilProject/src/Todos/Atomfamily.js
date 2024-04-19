import { atomFamily } from "recoil";
import { TODOS } from "./TODOAtom";

export const todosFamily = atomFamily({
  key: "todosFamily",
  default: (id) => {
    return TODOS.find((x) => x.id === id);
  },
});

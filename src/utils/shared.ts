export const Shared = {
  shouldElementBeActive: (state: string, element: string) =>
    state === element ? "active" : "",
};

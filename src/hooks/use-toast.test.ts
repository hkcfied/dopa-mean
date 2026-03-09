import { describe, it, expect, beforeEach } from "vitest";
import { reducer } from "./use-toast";

const makeToast = (id: string) => ({
  id,
  open: true,
  onOpenChange: () => {},
});

describe("use-toast reducer", () => {
  const emptyState = { toasts: [] };

  it("ADD_TOAST adds a toast", () => {
    const toast = makeToast("1");
    const result = reducer(emptyState, { type: "ADD_TOAST", toast });
    expect(result.toasts).toHaveLength(1);
    expect(result.toasts[0].id).toBe("1");
  });

  it("ADD_TOAST respects limit of 1", () => {
    const state = { toasts: [makeToast("1")] };
    const result = reducer(state, { type: "ADD_TOAST", toast: makeToast("2") });
    expect(result.toasts).toHaveLength(1);
    expect(result.toasts[0].id).toBe("2");
  });

  it("UPDATE_TOAST updates matching toast", () => {
    const state = { toasts: [makeToast("1")] };
    const result = reducer(state, {
      type: "UPDATE_TOAST",
      toast: { id: "1", title: "Updated" },
    });
    expect(result.toasts[0]).toMatchObject({ id: "1", title: "Updated" });
  });

  it("UPDATE_TOAST ignores non-matching ids", () => {
    const state = { toasts: [makeToast("1")] };
    const result = reducer(state, {
      type: "UPDATE_TOAST",
      toast: { id: "999", title: "Nope" },
    });
    expect(result.toasts[0]).not.toHaveProperty("title");
  });

  it("DISMISS_TOAST sets open to false", () => {
    const state = { toasts: [makeToast("1")] };
    const result = reducer(state, { type: "DISMISS_TOAST", toastId: "1" });
    expect(result.toasts[0].open).toBe(false);
  });

  it("DISMISS_TOAST without id dismisses all", () => {
    const state = { toasts: [makeToast("1")] };
    const result = reducer(state, { type: "DISMISS_TOAST" });
    expect(result.toasts.every((t) => !t.open)).toBe(true);
  });

  it("REMOVE_TOAST removes matching toast", () => {
    const state = { toasts: [makeToast("1")] };
    const result = reducer(state, { type: "REMOVE_TOAST", toastId: "1" });
    expect(result.toasts).toHaveLength(0);
  });

  it("REMOVE_TOAST without id clears all", () => {
    const state = { toasts: [makeToast("1")] };
    const result = reducer(state, { type: "REMOVE_TOAST", toastId: undefined });
    expect(result.toasts).toHaveLength(0);
  });
});

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { vi, afterEach, beforeEach } from "vitest";
import UserProfile from "./UserProfile";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("UserProfile", () => {
  test("індикатор загрузки", async () => {
    let resolveFetch;
    const fetchPromise = new Promise((resolve) => {
      resolveFetch = resolve;
    });

    vi.spyOn(global, "fetch").mockImplementation(() => fetchPromise);

    render(<UserProfile />);

    expect(screen.getByRole("status")).toHaveTextContent("Загрузка...");

    resolveFetch({
      ok: true,
      json: async () => ({ name: "Test User", email: "t@example.com" }),
    });

    await waitFor(() => expect(screen.getByTestId("username")).toBeInTheDocument());
  });

  test("показує імя та емейл", async () => {
    const mockUser = { name: "John Doe", email: "john@example.com" };
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => mockUser,
    });

    render(<UserProfile />);

    const nameEl = await screen.findByTestId("username");
    const emailEl = await screen.findByTestId("useremail");

    expect(nameEl).toHaveTextContent(mockUser.name);
    expect(emailEl).toHaveTextContent(mockUser.email);
  });

  test("показує повідомлення про помилку", async () => {
    vi.spyOn(global, "fetch").mockRejectedValue(new Error("Network Error"));

    render(<UserProfile />);

    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent("Ошибка: Network Error");
  });
});
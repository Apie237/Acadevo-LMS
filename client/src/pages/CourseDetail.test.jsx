/**
 * @vitest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import CourseDetail from "./CourseDetail";
import api from "../utils/api";

// We mock the API so it doesn't actually try to call your server
vi.mock("../utils/api.js", () => ({
  default: {
    get: vi.fn(() => Promise.resolve({ data: {} })),
    post: vi.fn(),
  },
}));

describe("CourseDetail Component", () => {
it("should render the list of lessons correctly", async () => {
  const mockCourse = {
    _id: "123",
    title: "Mastering UI Design",
    lessons: [
      { _id: "l1", title: "Introduction to Figma", isLocked: false },
      { _id: "l2", title: "Advanced Prototyping", isLocked: true }
    ]
  };

  api.get.mockResolvedValue({ data: mockCourse });

  render(
    <MemoryRouter>
      <CourseDetail />
    </MemoryRouter>
  );

  // Check if both lesson titles appear on the screen
  const lesson1 = await screen.findByText(/Introduction to Figma/i);
  const lesson2 = await screen.findByText(/Advanced Prototyping/i);

  expect(lesson1).toBeDefined();
  expect(lesson2).toBeDefined();
});
});
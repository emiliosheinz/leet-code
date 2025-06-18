import { canFinish } from "./course-schedule";

describe("canFinish", () => {
  test("returns true when there are no prerequisites", () => {
    expect(canFinish(2, [])).toBe(true);
  });

  test("returns true for a valid course schedule", () => {
    const numCourses = 2;
    const prerequisites = [[1, 0]];
    expect(canFinish(numCourses, prerequisites)).toBe(true);
  });

  test("returns false for a course schedule with a cycle", () => {
    const numCourses = 2;
    const prerequisites = [[1, 0], [0, 1]];
    expect(canFinish(numCourses, prerequisites)).toBe(false);
  });

  test("handles multiple courses with complex dependencies", () => {
    const numCourses = 4;
    const prerequisites = [[1, 0], [2, 1], [3, 2]];
    expect(canFinish(numCourses, prerequisites)).toBe(true);
  });

  test("returns false for a complex schedule with a cycle", () => {
    const numCourses = 4;
    const prerequisites = [[1, 0], [2, 1], [3, 2], [0, 3]];
    expect(canFinish(numCourses, prerequisites)).toBe(false);
  });
});

import { test, expect } from "@playwright/test";

test.describe("Basic functionality of the game", () => {
  test("Front page opens normally", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Tic-Tac-Toe");
  });

  test("A new game can be started", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "New Game" }).click();
    await expect(
      page.getByText("Waiting for Player 2 to join...")
    ).toBeVisible();
  });

  test("A second player can join an ongoing game", async ({ context }) => {
    const hostPage = await context.newPage();
    await hostPage.goto("/");
    await hostPage.getByRole("button", { name: "New Game" }).click();
    const gameId = await hostPage.getByRole("textbox").inputValue();

    const guestPage = await context.newPage();
    await guestPage.goto("/");
    await guestPage.getByRole("button", { name: "Join Game" }).click();
    const textBox = guestPage.getByRole("textbox", { name: "Enter Game ID" });
    await textBox.click();
    await textBox.fill(gameId);
    await guestPage.getByRole("button", { name: "Join" }).click();
    await expect(guestPage.getByText("Opponent's turn!")).toBeVisible();
  });
});

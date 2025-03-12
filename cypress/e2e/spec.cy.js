describe("Tic-Tac-Toe App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/");
    });

    it("TC01. Should load the app and display the title", () => {
        cy.contains("Tic-Tac-Toe").should("be.visible"); // Verify title is visible
    });

    // Verify the Game Board Renders Correctly
    it("TC02. Should have an empty board with 9 squares and should display the correct initial message", () => {
        cy.contains("h1", "Tic-Tac-Toe").should("be.visible");
        cy.get("button.square").should("have.length", 9); // Check if 9 squares exist
        cy.contains("Next Player: X").should("be.visible");
        cy.get("button.reset").should("be.visible");
    });

    // Click on a Square and Verify X or O Appears
    it("TC03. Should place 'X' on the first move and 'O' on the second move", () => {
        cy.get("button.square").eq(0).click().should("contain", "X"); // First move: X
        cy.contains("Next Player: O").should("be.visible");

        cy.get("button.square").eq(1).click().should("contain", "O"); // Second move: O
        cy.contains("Next Player: X").should("be.visible");
    });

    // Prevent Clicking on an Already Filled Square
    it("TC04. Should not allow clicking on an already filled square", () => {
        cy.get("button.square").eq(0).click().should("contain", "X");
        cy.get("button.square").eq(0).click().should("contain", "X"); // Should remain "X"
    });

    // Check Win Condition
    it("TC05. Should detect a winner", () => {
        cy.get("button.square").eq(0).click(); // X
        cy.get("button.square").eq(3).click(); // O
        cy.get("button.square").eq(1).click(); // X
        cy.get("button.square").eq(4).click(); // O
        cy.get("button.square").eq(2).click(); // X wins

        cy.contains("Winner: X").should("be.visible");
    });

    // Check Draw Condition
    it("TC06. Should detect a draw", () => {
        cy.get("button.square").eq(0).click(); // X
        cy.get("button.square").eq(1).click(); // O
        cy.get("button.square").eq(2).click(); // X
        cy.get("button.square").eq(4).click(); // O
        cy.get("button.square").eq(3).click(); // X
        cy.get("button.square").eq(5).click(); // O
        cy.get("button.square").eq(7).click(); // X
        cy.get("button.square").eq(6).click(); // O
        cy.get("button.square").eq(8).click(); // X

        cy.contains("Winner:").should("not.exist");
    });

    // Test the Reset Button
    it("TC07. Should reset game", () => {
        cy.get("button.square").eq(0).click(); // X
        cy.get("button.square").eq(1).click(); // O
        cy.get("button.reset").click(); // Click reset

        cy.get("button.square").each(($el) => {
            cy.wrap($el).should("be.empty");
        });

        cy.contains("Next Player: X").should("be.visible");
    });
});

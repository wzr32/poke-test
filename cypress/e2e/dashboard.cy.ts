describe("Dashboard page", () => {
  it("should render a list of items", () => {
    cy.visit("/login");
    cy.get('[data-cy="login-email"]').type("admin@main.com");
    cy.get('[data-cy="login-password"]').type("123123");
    cy.get('[data-cy="login-submit"]').click();
    cy.url().should("match", /\/dashboard/);
    cy.get('[data-cy="item-data"]').should("exist");
  });
});

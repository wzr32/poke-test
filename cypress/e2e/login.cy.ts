describe("Login page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should show validation errors when leaving all fields in blank", () => {
    cy.get('[data-cy="login-submit"]').click();
    cy.get("#\\:r1\\:-helper-text").should("exist");
    cy.get("#\\:r3\\:-helper-text").should("exist");
  });

  it("should redirect to the dashboard when a valid user make a login process successfuly", () => {
    cy.get('[data-cy="login-email"]').type("admin@main.com");
    cy.get('[data-cy="login-password"]').type("123123");
    cy.get('[data-cy="login-submit"]').click();
    cy.url().should("match", /\/dashboard/);
  });
});

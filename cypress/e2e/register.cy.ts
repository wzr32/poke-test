describe("Register page", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("should show validation errors when leaving all fields in blank", () => {
    cy.get('[data-cy="register-submit"]').click();
    cy.get("#\\:r1\\:-helper-text").should("exist");
    cy.get("#\\:r3\\:-helper-text").should("exist");
    cy.get("#\\:r5\\:-helper-text").should("exist");
    cy.get("#\\:r7\\:-helper-text").should("exist");
    cy.get("#\\:r9\\:-helper-text").should("exist");
  });

  it("should redirect to the Login page the signup is successful", () => {
    cy.get('[data-cy="register-email"]').type("ruben@mail.com");
    cy.get('[data-cy="register-first-name"]').type("Ruben");
    cy.get('[data-cy="register-last-name"]').type("Padilla");
    cy.get('[data-cy="register-password"]').type("123123");
    cy.get('[data-cy="register-c_password"]').type("123123");
    cy.get('[data-cy="register-submit"]').click();
    cy.url().should("match", /\/login/);
  });
});

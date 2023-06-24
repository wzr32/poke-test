import { LoginView } from "../../src/pages/public/login";

describe("<LoginView />", () => {
  it("should render", () => {
    cy.mount(LoginView);
  });
});

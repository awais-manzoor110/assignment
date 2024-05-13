describe("Top Ten Websites for SEO", () => {
  it("Top website search results for word (SEO for contractors)", () => {
    cy.visit("https://www.google.com/");
    cy.get('[title="Search"]').type("SEO For Contrators {Enter}");
    cy.get(".notranslate  > .q0vns > .CA5RN >div >.VuuXrf").each(
      ($result, index) => {
        if (index < 10) {
          cy.task("log", `${index + 1}. ${$result.text()}`);
          console.log(`${index + 1}. ${$result.text()}`);
        }
      }
    );
  });
});

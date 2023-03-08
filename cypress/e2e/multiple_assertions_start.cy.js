/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/board/30157046838")
})

it("Multiple assertions", () => {
  // then does not contain retry logic
  // cy.get("[data-cy=task]").then((item) => {
  //   expect(item[0]).to.contain.text("task 1")
  //   expect(item[1]).to.contain.text("task 2")
  // })

  // should does retry logic
  cy.get("[data-cy=task]").should((item) => {
    if (item.length !== 3) {
      throw new Error("not enough elements")
    }
    expect(item[0]).to.contain.text("task 2")
    expect(item[1]).to.contain.text("task 1")
  })
})

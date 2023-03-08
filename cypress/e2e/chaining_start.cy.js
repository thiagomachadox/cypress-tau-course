/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/board/30157046838")
})

it("Chaining commands", () => {
  cy.get('[data-cy="task"]').eq(0).should("contain.text", "task 1")

  cy.get("[data-cy=list]").eq(1).contains("task")
})

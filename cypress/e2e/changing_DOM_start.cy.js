/// <reference types="cypress" />
const { faker } = require("@faker-js/faker")

let boardId = faker.datatype.uuid()

describe("Chaining DOM commands", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("creates a new board", () => {
    cy.get('[data-cy="create-board"]').click()
    cy.get('[data-cy="new-board-input"]').type(`board ${boardId}`)
    cy.contains("Save").should("exist").click()
  })

  it("star a board", () => {
    // star first board
    // cy.get('[data-cy="star"]').click({ force: true })
    cy.get('[data-cy="star"]').eq(0).invoke("show").click()
  })

  it("mark a task as overdue", () => {
    // open board
    cy.contains("board 1").invoke("show").click()

    // change DOM
    cy.get('[data-cy="task"]').eq(0).invoke("addClass", "overDue")
  })

  it("trigger an event listener via dom", () => {
    cy.get('[data-cy="board-item"]').eq(0).trigger("mouseover")

    cy.get("[data-cy=star]").should("be.visible")

    cy.get('[data-cy="board-item"]').eq(0).trigger("mouseout")

    cy.get("[data-cy=star]").should("not.be.visible")
  })
})

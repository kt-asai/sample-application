// https://docs.cypress.io/api/table-of-contents

describe("Topページを開くと", () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it("サイト説明が表示される", () => {
    cy.contains("div", "サイト説明")
    cy.contains("div", " 本サイトはVueを用いたアプリケーションの作成とそのエコシステムを実践的に学ぶためのアプリケーションです。")
  });

  it("Todoリンクへ遷移ができる", () => {
    cy.contains("div.v-list-item-title", "Todo")
    cy.get("a[href='/todo']").click();
    cy.url().should('include', '/todo')
  })
});

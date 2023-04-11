const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = require("../app").app;

describe("Suite of e2e tests", () => {
  it("Should return hello", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        console.log("A");
        chai.assert.equal(res.text, "Hello");
        done();
      });
    console.log("B");
  });
});

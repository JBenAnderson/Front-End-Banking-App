function Withdraw() {
  const ctx = React.useContext(UserContext);

  const balance = JSON.stringify(ctx.users[ctx.users.length - 1].balance);
  console.log(balance);
  return (
    <div className="container">
      <div className="card align-items-center">
        <Card
          header="Withdraw Available Funds"
          title={<div>${balance}</div>}
          status={status}
          body={
            <>
              <br />
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <span className="input-group-text">.00</span>
              </div>

              <br />

              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-light"
                  //onClick={}
                >
                  withdraw
                </button>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}

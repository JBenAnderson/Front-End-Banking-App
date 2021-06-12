function Deposit() {
  const [deposit, setDeposit] = React.useState("");
  const ctx = React.useContext(UserContext);

  const balance = ctx.users[ctx.users.length - 1].balance;

  return (
    <div className="container">
      <div className="card align-items-center">
        <Card
          header="Deposit Funds"
          title={<div>${balance}</div>}
          status={status}
          body={
            <>
              <br />
              How Much To Deposit?
              <br />
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                  id="deposit"
                  value={deposit}
                  type="number"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  onChange={(e) => setDeposit(e.currentTarget.value)}
                />
                <span className="input-group-text">.00</span>
              </div>
              <br />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={(e) => {}}
              >
                Add Funds
              </button>
            </>
          }
        />
      </div>
    </div>
  );
}

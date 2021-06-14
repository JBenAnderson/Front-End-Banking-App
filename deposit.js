function Deposit() {
  const [deposit, setDeposit] = React.useState(0);
  const ctx = React.useContext(UserContext);
  const newDeposit = 0;
  const balance = ctx.users[ctx.users.length - 1].balance;
  const currentUser = ctx.users[ctx.users.length - 1];

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
                onClick={(e) => {
                  if (deposit < 0) {
                    alert(
                      "You cannot enter a negative number here.  If you would to withdraw, please visit the Withdraw Page."
                    );
                  } else {
                    function calculate() {
                      let intDeposit = parseInt(deposit);
                      let initialValue = balance;

                      console.log(initialValue + intDeposit);
                      {
                        {
                          currentUser.balance = initialValue + intDeposit;
                          setDeposit(currentUser.balance);
                          console.log(currentUser);
                        }
                      }
                    }
                    calculate();
                  }
                }}
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

function Deposit() {
  const ctx = React.useContext(UserContext);

  const balance = JSON.stringify(ctx.users[0].balance);
  console.log(balance);
  return (
    <Card
      text-align="center"
      bgcolor="primary"
      header="Withdraw"
      title="Available funds"
      status={status}
      body={balance}
    />
  );
}

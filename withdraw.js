function Withdraw() {
  const ctx = React.useContext(UserContext);
  const balance = JSON.stringify(ctx.users.balance);
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

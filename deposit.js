function Deposit() {
  const ctx = React.useContext(UserContext);

  const balance = JSON.stringify(ctx.users[0].balance);
  console.log(balance);
  return (
    <Card
      text-align="center"
      header="Withdraw"
      title="Current Balance"
      status={status}
      body={balance}
    />
  );
}

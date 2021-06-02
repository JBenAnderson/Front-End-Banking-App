function Balance() {
  const ctx = React.useContext(UserContext);

  return (
    <Card
      text-align="center"
      bgcolor="primary"
      header="Balance"
      status={status}
      body={JSON.stringify(ctx.users.balance)}
    />
  );
}

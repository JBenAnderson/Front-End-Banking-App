function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      text-align="center"
      bgcolor="primary"
      header="All Data"
      status={status}
      body={JSON.stringify(ctx)}
    />
  );
}

function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      text-align="center"
      header="All Data"
      status={status}
      body={<div>{JSON.stringify(ctx)}</div>}
    />
  );
}

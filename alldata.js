function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      text-align="center"
      header="All Data"
      status={status}
      body={JSON.stringify(ctx)}
    />
  );
}

function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <div className="container">
      <div className="card align-items-center">
        <div className="card">
          <div className="card-header">All Data</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0"></blockquote>
            <div className="container2">
              <div className="row">
                <div className="col-sm">Email</div>
                <div className="col-sm">Name</div>
                <div className="col-sm">Password</div>
                <div className="col-sm">Balance</div>
              </div>
            </div>

            <div className="row">
              <div className="col">Email</div>
              <div className="col">Name</div>
              <div className="col">Password</div>
              <div className="col">Password</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function AllData() {
//   const ctx = React.useContext(UserContext);
//   return (
//     <Card
//       text-align="center"
//       header="All Data"
//       status={status}
//       body={<div>{JSON.stringify(ctx)}</div>}
//     />
//   );
// }

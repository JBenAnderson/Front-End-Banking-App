function AllData() {
  let ctx = React.useContext(UserContext);

  const html = [];
  const num = 0;
  for (let i = 0; i < ctx.users.length; i++) {
    html.push(i);
    //let tempNum = html.shift();
    //tempNum = num;
  }

  console.log(html);
  return (
    <div className="container">
      <table id="myTable" className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>

        <tbody id="tbody">
          <>
            <tr>
              <th scope="row">
                {JSON.stringify(ctx.users[ctx.users.length - 1].email)}
              </th>
              <th scope="row">{JSON.stringify(ctx.users[num].name)}</th>
              <th scope="row">{JSON.stringify(ctx.users[num].password)}</th>
              <th scope="row">{JSON.stringify(ctx.users[num].balance)}</th>
            </tr>
          </>
        </tbody>
      </table>
    </div>
  );
}

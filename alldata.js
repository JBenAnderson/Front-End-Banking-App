function AllData() {
  const ctx = React.useContext(UserContext);

  for (let i = 0; i <= ctx.users.length; i++) {
    const char = ctx.users[i];
  }

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              {ctx.users.forEach((element, index) => {
                let nameData = ctx.users[index].name;
                let emailData = ctx.users[index].email;
                let passwordData = ctx.users[index].password;
                let balanceData = ctx.users[index].balance;
              })}
            </th>
            <th scope="col">name</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>$200</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>$200</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>$200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

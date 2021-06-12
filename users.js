function Users(email, name, password, balance) {
  let ctx = React.useContext(UserContext);
  let form = [];

  function getUsers(i) {
    for (i = 0; i < ctx.users.length; i++) {
      email = ctx.users[i].email;
      name = ctx.users[i].name;
      password = ctx.users[i].password;
      balance = ctx.users[i].balance;

      form.push([
        <tr key="tablerow">
          <th key="email">{JSON.stringify(email)}</th>
          <th key="name">{JSON.stringify(name)}</th>
          <th key="password">{JSON.stringify(password)}</th>
          <th key="balance">${JSON.stringify(balance)}</th>
        </tr>,
      ]);
    }
  }

  getUsers();

  return form;
}

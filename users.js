function Users(email, name, password, balance, form) {
  let ctx = React.useContext(UserContext);

  function getEmail() {
    for (let i = 0; i < ctx.users.length; i++) {
      email = ctx.users[i].email;
      name = ctx.users[i].name;
      password = ctx.users[i].password;
      balance = ctx.users[i].balance;
    }
  }
  getEmail();

  return (
    <>
      <tr>
        <th scope="row">{JSON.stringify(email)}</th>
        <th scope="row">{JSON.stringify(name)}</th>
        <th scope="row">{JSON.stringify(password)}</th>
        <th scope="row">{JSON.stringify(balance)}</th>
      </tr>
    </>
  );
}

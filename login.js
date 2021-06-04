function Login() {
  const ctx = React.useContext(UserContext);

  const login = JSON.stringify(ctx.users[0].name);
  console.log(login);
  return (
    <Card
      txtcolor="white"
      header="Login"
      title="Your current login"
      status={status}
      body={login}
    />
  );
}

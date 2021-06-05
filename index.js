function Spa() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "ben",
                email: "ben@mit.edu",
                password: "secret",
                balance: 100,
              },
              {
                name: "tom",
                email: "tom@mit.edu",
                password: "captain america",
                balance: 1200,
              },
            ],
          }}
        >
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/alldata/" component={AllData} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
        </UserContext.Provider>
      </HashRouter>
    </>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));

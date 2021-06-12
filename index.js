function Spa() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                email: "JSmith@mit.edu",
                name: "John Smith",
                password: "rubyred1",
                balance: 588,
              },
              {
                email: "peterparker@mit.edu",
                name: "Peter Parker",
                password: "spidey2099",
                balance: 1207,
              },

              {
                email: "bwayne13@WayneEnterprise.com",
                name: "Bruce Wayne",
                password: "batfan77",
                balance: 126704,
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

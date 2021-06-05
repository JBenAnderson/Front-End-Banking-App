function Home() {
  return (
    <div className="container">
      <div className="card align-items-center">
        <Card
          txtcolor="white"
          header="Front-End Bank Landing Page"
          title="Welcome to the bank"
          text="You can use this bank"
          body={
            <img src="bank.png" className="img-fluid" alt="Responsive image" />
          }
        />
      </div>
    </div>
  );
}

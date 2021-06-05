function Home() {
  return (
    <div className="container">
      <div className="row align-items-center h-100">
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

function Home() {
  return (
    <Card
      textAlign="center"
      bgcolor="primary"
      txtcolor="white"
      header="Front-End Bank Landing Page"
      title="Welcome to the bank"
      text="You can use this bank"
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  );
}

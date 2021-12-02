const createdEl = React.createElement;

// return <button onClick={() => this.setState({ liked: true })}>Like</button>;

// Display a "Like" <button>
return e("button", { onClick: () => this.setState({ liked: true }) }, "Like");

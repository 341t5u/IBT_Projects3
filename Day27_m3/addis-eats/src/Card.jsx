function card({ children }) {
  return <div className="card">{children}</div>; //every thing between <div> or card is a child of the card component, children represents whatever you put inside the component.
}

export default card;

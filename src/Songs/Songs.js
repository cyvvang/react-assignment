import "./Songs.css";

function Songs({result}) {
  return (
    <section className="card-container">
      {result}
      <li class="hidden-flex-item"></li>
      <li class="hidden-flex-item"></li>
      <li class="hidden-flex-item"></li>
    </section>
  );
}

export default Songs;
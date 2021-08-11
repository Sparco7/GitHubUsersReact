import "./Card.css";

export default function Card(props) {
  return (
    <div className="col-12 col-lg-4">
      <div className="card">
        <img src={props.src} className="card-img-top" alt={props.alt} />
        <div className="card-body">
          <h5 className="card-title">
            <i class="fas fa-user"></i> {props.title}
          </h5>
          <p className="card-text">
            <p>
              <i class="fas fa-arrow-circle-right"></i> Followers:{" "}
              {props.followers}
            </p>
            <p>
              <i class="fas fa-arrow-circle-left"></i> Following:{" "}
              {props.following}
            </p>
            <p><i class="fas fa-calendar-week"></i> Created at: {props.created_at.split('T')[0]}</p>
          </p>
          <a href={props.url} target="_blank" className="btn btn-primary">
            User's GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

let cardStyle = {
  width: "300px",
};

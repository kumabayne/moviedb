import './Card.scss';

export default function Card({ data }) {
  const baseURL = `http://image.tmdb.org/t/p/w342`;

  return (
    <div className="Card">
      <img
        className="Card-poster img-responsive"
        src={`${baseURL}${data.poster_path}`}
        height="513"
        width="342"
        alt={data.title}
      />
      <h2 className="Card-title">{data.title}</h2>
    </div>
  );
}

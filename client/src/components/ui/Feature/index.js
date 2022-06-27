import './Feature.scss';

export default function Feature({ data }) {
  const baseURL = `https://image.tmdb.org/t/p/w780`;

  return (
    <div className="Feature">
      <img
        className="Feature-backdrop img-responsive"
        src={`${baseURL}${data.backdrop_path}`}
        height="439"
        width="780"
        alt={data.title}
      />
      <h2 className="Feature-title">{data.title}</h2>
    </div>
  );
}

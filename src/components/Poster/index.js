import "./style.scss";

const Poster = () => {
  return (
    <div id="poster">
      <div id="gradient">
        <img id="placeholder" src="../../assets/poster/placeholder.jpg" />;
      </div>
      <div class="text">
        <ul id="description">
          <li>Crimes</li>
          <li>Britânico</li>
          <li>Obras de época</li>
          <li>Drama</li>
        </ul>
      </div>
    </div>
  );
};
export { Poster };

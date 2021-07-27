import './style.scss';

const Trending = ({ data }) => {

  return (
    <>
        {data && (
          <div id="trending">
            <div className="trending-text">
              <p>Em alta</p>
            </div>
            <div id="trending-posters">
              {data.map(({image, id}) => (
                <img 
                  key={`trending${id}`}
                  src={image.medium} 
                  alt="posters"
                /> 
              ))}
            </div>
          </div>          
        )}
    </>
  );
}

export { Trending }
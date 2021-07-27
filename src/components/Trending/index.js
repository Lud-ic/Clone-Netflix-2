import './style.scss';

const Trending = ({ response }) => {
 
  return (
    <>
        {response && (
          <div id="trending">
            <div className="trending-text">
              <p>Em alta</p>
            </div>
            <div id="trending-posters">
              {response.map(({image, id}) => (
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
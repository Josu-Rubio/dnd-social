import './radios.css';

export default function Radios() {
  return (
    <div className='radios'>
      <h1 className='podcastTitle'>Nuestros audios preferidos</h1>
      <div className='spotifyWrapper'>
        <iframe
          className='spotifyShare'
          src='https://open.spotify.com/embed/show/7eehQh4aqzp64lGHU2ga1G?utm_source=generator&theme=0'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        />
        <iframe
          className='spotifyShare'
          src='https://open.spotify.com/embed/show/7e8zPFBpW0DtgyrrPnt0xT?utm_source=generator&theme=0'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        />
        <iframe
          className='spotifyShare'
          src='https://open.spotify.com/embed/show/04KgPyGwvYx0IfYoqauNxs?utm_source=generator&theme=0'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        />
        <iframe
          src='https://open.spotify.com/embed/playlist/1EbvxtnfOB17TiK50pI6mH?utm_source=generator'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          className='spotifyPlaylist'
        />
      </div>
    </div>
  );
}

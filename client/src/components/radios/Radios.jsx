import './radios.css';

export default function Radios() {
  return (
    <div className='radios'>
      <h1 className='podcast Title'>Nuestros podcast preferidos</h1>
      <div className='spotifyRep'>
        <iframe
          className='spotifyBotched'
          src='https://open.spotify.com/embed/show/7eehQh4aqzp64lGHU2ga1G?utm_source=generator&theme=0'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        />
        <iframe
          className='spotifyBotched'
          src='https://open.spotify.com/embed/show/7eehQh4aqzp64lGHU2ga1G?utm_source=generator&theme=0'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        />
        <iframe
          className='spotifyBotched'
          src='https://open.spotify.com/embed/show/7eehQh4aqzp64lGHU2ga1G?utm_source=generator&theme=0'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        />
        <iframe
          className='spotifyBotched'
          src='https://open.spotify.com/embed/show/7eehQh4aqzp64lGHU2ga1G?utm_source=generator&theme=0'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        />
      </div>
    </div>
  );
}

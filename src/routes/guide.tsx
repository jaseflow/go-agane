import { useParams } from 'react-router-dom';

export default function Guide() {

  const { build } = useParams();

  const styledBuild = build?.replace(/-/g, " ");
  
  return (
    <div className="container container--small">
      <div className="text-centered">
        <h1 style={{ marginBottom: '80px'}}><span style={{ textTransform: 'capitalize'}}>{styledBuild}</span></h1>
        <h2>Coming soon</h2>
        <p>If you are interested in writing the <span style={{ textTransform: 'capitalize'}}>{styledBuild}</span> guide with your name as the author, then message <strong>Oddflow#5608</strong> in the HC Discord.</p>
      </div>
    </div>
  )

}

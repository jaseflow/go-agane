import { useParams } from 'react-router-dom';

export default function Guide() {

  const { build } = useParams();

  const styledBuild = build?.replace(/-/g, " ");
  
  return (
    <div className="container container--small">
      <div className="text-centered">
        <h1 style={{ marginBottom: '85px'}}><span style={{ textTransform: 'capitalize'}}>{styledBuild}</span></h1>
        <h2>Coming soon</h2>
        <p>Interested in writing the <span style={{ textTransform: 'capitalize'}}>{styledBuild}</span>guide? Message <strong>Oddflow#5608</strong> in the official HC Discord.</p>
      </div>
    </div>
  )

}

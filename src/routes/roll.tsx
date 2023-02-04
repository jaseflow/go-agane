import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import alliance from '../assets/alliance.png';
import horde from '../assets/horde.png';

import { CLASSES, FACTIONS } from '../data';

export default function Roll() {

  const [rolled, setRolled] = useState(false);
  const [toonCoverUrl, setToonCoverUrl] = useState<string>();

  const [faction, setFaction] = useState('any');
  const [spec, setSpec] = useState<string>()
  const [race, setRace] = useState<string>()
  const [toonClass, setToonClass] = useState<string>()

  const factionIndex = FACTIONS.findIndex((f: any) => f.name.toLowerCase() === faction);

  function generate () {
    const randomFaction = FACTIONS[Math.floor(Math.random() * FACTIONS.length)];
    const randomRace = factionIndex >= 0 ? FACTIONS[factionIndex].races[Math.floor(Math.random() * randomFaction.races.length)] : randomFaction.races[Math.floor(Math.random() * randomFaction.races.length)];
    const randomClass = randomRace.classes[Math.floor(Math.random() * randomRace.classes.length)];
    const randomSpec = CLASSES.find((c: any) => c.name === randomClass)!.specs[Math.floor(Math.random() * CLASSES.find((c: any) => c.name === randomClass)!.specs.length)];

    setRace(randomRace.name);
    setToonClass(randomClass);
    setSpec(randomSpec.name);
    setRolled(true);
    setTimeout(() => {
      window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' });
    }, 0)
  }

  function getImageUrl(name: string) {
    return new URL(`../assets/builds/${name}.png`, import.meta.url).href
  }

  useEffect(() => {
    if (spec && race && toonClass) {
      const toon = `${race} ${spec} ${toonClass}`
      const formatted = `${toon?.toLowerCase().replace(/ /g, "-")}`;
      const url = getImageUrl(formatted);
      setToonCoverUrl(url);
    }
  }, [spec, race, toonClass])


  return (
    <div className="container container--small">
      <div className="rollWrapper">
        <h1 className="text-centered">Choose a faction</h1>
        <div>
          <div className="factions">
            <label htmlFor="factionAny" className={`label ${faction === 'any' ? 'label--checked' : ''}`}>
              <input type="radio" id="factionAny" value="any" onChange={() => setFaction('any')} checked={faction === 'any'} />
              Any faction
            </label>
            <label htmlFor="factionAlliance" className={`label ${faction === 'alliance' ? `label--checked ${faction}` : ''}`}>
              <img src={alliance} alt="" width={20} />
              <input type="radio" id="factionAlliance" value="alliance" onChange={() => setFaction('alliance')} checked={faction == 'alliance' }/>
              Alliance
            </label>
            <label htmlFor="factionHorde" className={`label ${faction === 'horde' ? `label--checked ${faction}` : ''}`}>
              <img src={horde} alt="" width={20} />
              <input type="radio" id="factionHorde" value="horde" onChange={() => setFaction('horde')} checked={faction === 'horde'} />
              Horde
            </label>
          </div>
          {!rolled && (
            <button onClick={generate} className={`roll ${faction}`}>{!rolled ? 'Roll for a build' : 'Go agane'}</button>
          )}
          {rolled &&  
            <div>
              <div className="toon" style={{ backgroundImage: `url(${toonCoverUrl})`}}>
                <div className="toonWrapper">
                  <h3 className="toonTitle">{race} {spec} {toonClass}</h3>
                  <Link className="link" to={`/${spec}-${toonClass}`}>See Hardcore Guide</Link>
                </div>
              </div>
              <footer style={{ marginTop: '50px' }}>
                <button onClick={generate} className="roll secondary">Go agane</button>
              </footer>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

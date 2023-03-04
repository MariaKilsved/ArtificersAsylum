import ListGroup from 'react-bootstrap/ListGroup';
import Menu from "../components/menu.js";
import Generator from "../components/generator";

function generateFantasyTownsPrompt(count) {
    return `Suggest town and/or city names for a fantasy world.
  
    Ten fantasy town and/or city names:
    Fairlight, Fiddler's Green, Hexham, Keystone, Lilyvale, Merrymeet, Ravendale, Seething, The Forge, Witchfield
    
    ${count} fantasy town and/or city names:`;
  }
  
  function generateSillyTownsPrompt(count) {
    return `Suggest silly town and/or city names.
  
    Twenty silly town and/or city names:
    Belcher's Bar, Cakeworth, Chew, Downside, Frenchbeer, Great Snoring, Lickford, Lipburn, Midget Hill, Mutton Row, North Radish, Nutburn, Pancakehill, Puddingmarsh, Puddlebridge, Stiff Manor, Strutmore, Tadpool, Triplow, Udderburn
    
    ${count} silly town and/or city names:`;
  }

export default function Beings() {

  return (
    <div>
        <div className='pt-menu'>
            <Generator title="Generate fantasy town names" prompt={generateFantasyTownsPrompt}/>
        </div>
      <Menu />
    </div>
  );
}

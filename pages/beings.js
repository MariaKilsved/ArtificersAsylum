import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Menu from "../components/menu.js";
import Generator from "../components/generator";
import { ListGroupItem } from 'react-bootstrap';


function nullPrompt(count = 0) {
  return ``;
}

function generateFantasyPlantsPrompt(count = 0) {
  return `Suggest ${count} plants for a fantasy RPG.

  Ten magical plants:
  * Constrictor Root: An inconspicuous vine capable of snake-like movement. It will entangle the feet of unsuspecting travelers, dragging them away.
  * Demonic Mantrap: Large carnivorous plant with a big mouth. It enjoys eating humans whole.
  * Dragonbreath Chili: This chili fruit is so hot, it puts your breath on fire. 
  * Forget-Me-Nut: Bush with blue blossoms, and later hard nuts. Consuming the nuts causes amnesia. 
  * Glowcap Mushroom: This mushroom prefers growing in dark, damp, caves. It glows in the dark.
  * Nightmare Poppy: The soporific fragrance of this poppy is manageable in small quantities. However, if you encounter an entire field of them you will be trapped in a nightmare dreamscape, unable to wake up.
  * Nostril Algae: A type of algae which will parasitize in the nasal cavity. Those suffering from nostril algae can be recognized by the green substance growing from their nostrils. 
  * Puffblossom Windrider: Light as air, this plant spends its entire lifecycle riding the wind. Its appearance is similar to a very large dandelion seed.
  * Thornshooter: This evergreen bush has the ability to shoot and fire its needles like sharp projectiles.
  * Wandering Flower: Seemingly a common daisy, the Wandering Flower won't stay in one place for long. It moves by jumping on a single, frog-like, foot.
  
  ${count} more magical plants:`;
}

function generateFantasyAnimalsPrompt(count = 0) {
  return `Suggest ${count} new animals for a fantasy RPG. Animals may not be legendary or mythical creatures such as griffins or unicorns.

  Eleven fantastical animals: 
  * Aquatic Peacock: This resplendent bird has feathers like a peacock, but behaves like a swan.
  * Archerfish: A seemingly ordinary fish with the ability to shoot bursts of water from its mouth. This unique ability is used for hunting insects.
  * Bloodmoth: Blood-sucking moth which is a carrier for disease.
  * Dragonfly Lizard: A small, green, lizard which flies around on dragonfly wings. 
  * Elven Ape: The elven equivalent to an ape. Unlike other apes, Elven Apes have pointy ears and a haughty demeanor. 
  * Fire-ferret: A ferret which dwells in volcanic environments. A flame burns at the end of its tail. 
  * Fluffball: Though actually a rodent, this small, cute, creature appears as a walking ball of fluff. 
  * Furred Snake: A mountain-dwelling snake covered in snow-white fur. 
  * Giant Chicken: Giant Chickens were created from a mad sorcerer's experiment. They are large enough to be used for riding. 
  * Intelligent Rat: Evolved from rats feeding on magical ingredients, the Intelligent Rat is far more intelligent than normal and capable of human speech.
  * Shooting Hedgehog: A hedgehog capable of shooting its spines when threatened by predators. 
  
  ${count} new fantastical animals:`;
}


function generateFantasyMonstersPrompt(count = 0) {
  return `Suggest ${count} new monsters for a fantasy RPG. All monsters should be dangerous creatures.

  Ten fantasy monsters:
  * Abyssal Leech: A giant leech, ultramarine in color. It originates from another dimension and will feed on any source of magic it can find. If no magic is available, it will go after blood.
  * Blood Dryad: Unlike normal dryads, this Blood Dryad has grown feeding on blood and wants more of it.
  * Desert Giant: Made from the rock slabs of a forgotten temple, this colossal beast wants to avenge the fall of a lost civilization.
  * Fire Elemental: Incarnation of the essence of fire. Though some magicians have subjugated Fire Elementals, all Wild Fire Elementals are naturally aggressive.
  * Fungal Rodent: A giant mutated rat, infested with a parasitic fungus. It seems like it wants to spread the fungus by attacking passerbys. 
  * Ghoul Crow: Undead crow which will swoop down from above. It often targets the eyes.
  * Horned Direwolf: A giant wolf with a demonic heritage. Typically, when a Horned Direwolf appears in an area it will subjugate the local normal wolves and use them as lackeys. 
  * Ice Archon: A demonic ice creature found only in the far north. Even a single specimen is enough to wipe out a team of adventurers. 
  * Spiderturtle: A dog-sized spider with a turtle-like shell. Spiderturtles will hunt in packs for fresh meat. 
  * Violet Dragonewt: A violet baby dragon. It seems to have gone rabid from an unknown magical influence. 
  
  ${count} fantasy monsters:`;
}

function generateSteampunkMonstersPrompt(count = 0) {
  return `Suggest ${count} new monsters for a steampunk RPG. Monsters should either be made of clockwork, or be made of metal, or be inspired by pseudo-science, or be a fusion of magic and technology.

  Eight steampunk monsters:
  * Alchemical Mutant: Misshapen creature formed from alchemical experiments. It seems to be a failed homunculus. 
  * Cable Serpent: A cable which has come alive and is attacking humans.
  * Clockwork Golem: A golem made from complex clockwork. It is a mechanical guard and won't attack unless provoked.
  * Electricity Elemental: The essence of electricity has taken on a living form. It attacks by zapping its enemies with lightning. 
  * Skitterbot: An insect-like clockwork robot. Skitterbots rarely appear alone and will attack in swarms. 
  * Spy-Eye: The Spy-Eye seems like a human eye made out of complex clockwork parts. It flies around on tiny helicopter rotors. Its purpose is spying.
  * Steam Scorpion: A giant brass scorpion which is propelled by steam technology. It attacks using its pincers and will fire cannonballs from its tail.
  * Steelcrab: A crab with a steel shell. It is extremely durable and has a vicious personality.
  
  ${count} new steampunk monsters:`;
}

export default function Beings() {

  var [selectedGenerator, setSelectedGenerator] = useState(nullPrompt(0));
  var [selectedTitle, setSelectedTitle] = useState("");

  function selectGenerator(event) {
    event.preventDefault();

    //Active class

    let listGroupCollection = document.getElementsByClassName("list-group-item");
    var listGroupArray = [...listGroupCollection];

    listGroupArray.forEach((item) => item.classList.remove("active"));

    event.target.classList.add("active");

    setSelectedGenerator = event.target.getAttribute('data-arg1');
    setSelectedTitle = "Generate " + event.target.getAttribute('data-arg2');
  }

/*
        <ListGroup as="ul">
          <ListGroup.Item as="li" onClick={selectGenerator} data-arg1={generateFantasyPlantsPrompt} data-arg2="fantasy plants"><b>Fantasy plants</b><br/>Generates deadly or mysterious plants for your fantasy setting.</ListGroup.Item>
          <ListGroup.Item as="li" onClick={selectGenerator} data-arg1={generateFantasyAnimalsPrompt} data-arg2="fantasy animals"><b>Fantasy animals</b><br/>Ordinary but extraordinary animals you might find in a fantasy setting, different from rampaging beasts.</ListGroup.Item>
          <ListGroup.Item as="li" onClick={selectGenerator} data-arg1={generateFantasyMonstersPrompt} data-arg2="fantasy monsters"><b>Fantasy monsters</b><br/>Dangerous fantasy monsters that will attack.</ListGroup.Item>
          <ListGroup.Item as="li" onClick={selectGenerator} data-arg1={generateSteampunkMonstersPrompt} data-arg2="steampunk monsters"><b>Steampunk monsters</b><br/>Those rare metallic creatures and contraptions that might attack you in a steampunk world.</ListGroup.Item>
        </ListGroup>
*/

  return (
    <div>
      <Container className="pt-menu">



        <Generator title="Generate steampunk monsters" prompt={generateSteampunkMonstersPrompt}/>
      </Container>
      <Menu />
    </div>
  );
}

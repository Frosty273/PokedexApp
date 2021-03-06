import React, { useEffect } from "react";
import { Typography, CircularProgress, Button } from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import { displayStat } from "../utils/displayStat";
import { determineAbility } from "../utils/determineAbility";
import { filterMoveType } from "../utils/filterMoveType";
import { capitaliseName } from "../utils/capitaliseName";
import styled from "styled-components";
import { displayEggGroup } from "../utils/displayEggGroup";

const useStyles = makeStyles(() => ({
  spinnerStyle: {
    width: "10rem",
    height: "10rem",
    borderWidth: "1rem",
  },
  spinnerWrapperStyle: {
    // marginTop: "500px",
    // alignItems: 'center'
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  returnToPokedex: {
    align: "flex",
    marginBottom: "10px",
    marginRight: "50px",
    backgroundColor: "#3F51F5",
    color: "white",
    "&:hover": {
      backgroundColor: "#3F51F5",
    },
  },
  types: {
    color: "white",
    textAlign: "center",
    borderRadius: "20px",
    paddingRight: "10px",
    paddingLeft: "10px",
    width: "80px",
    marginBottom: "5px",
  },
}));

const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = React.useState(undefined);
  const [pokemonSpecies, setPokemonSpecies] = React.useState(undefined);
  const classes = useStyles();

  const typeColours = {
    normal: {
      background: "#A8A878",
      "border-color": "#6D6D4E",
    },
    fire: {
      background: "#F08030",
      "border-color": "#9C531F",
    },
    fighting: {
      background: "#C03028",
      "border-color": "#7D1F1A",
    },
    water: {
      background: "#6890F0",
      "border-color": "#445E9C",
    },
    flying: {
      background: "#A890F0",
      "border-color": "#6D5E9C",
    },
    grass: {
      background: "#78C850",
      "border-color": "#4E8234",
    },
    poison: {
      background: "#A040A0",
      "border-color": "#682A68",
    },
    electric: {
      background: "#F8D030",
      "border-color": "#A1871F",
    },
    ground: {
      background: "#E0C068",
      "border-color": "#927D44",
    },
    psychic: {
      background: "#F85888",
      "border-color": "#A13959",
    },
    rock: {
      background: "#B8A038",
      "border-color": "#786824",
    },
    ice: {
      background: "#98D8D8",
      "border-color": "#638D8D",
    },
    bug: {
      background: "#A8B820",
      "border-color": "#6D7815",
    },
    dragon: {
      background: "#7038F8",
      "border-color": "#4924A1",
    },
    ghost: {
      background: "#705898",
      "border-color": "#493963",
    },
    dark: {
      background: "#705848",
      "border-color": "#49392F",
    },
    steel: {
      background: "#B8B8D0",
      "border-color": "#787887",
    },
    fairy: {
      background: "#EE99AC",
      "border-color": "#9B6470",
    },
  };

  const Badge = styled.div`
    background: ${(props) => typeColours[props.inputType]["background"]};
    border-color: ${(props) => typeColours[props.inputType]["border-color"]};
    outline: 0;
  `;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemonSpecies(data);
      })
      .catch(function (error) {
        setPokemonSpecies(false);
      });
  }, [pokemonId]);

  const nextPreviousPokemon = (num) => {
    const { id } = pokemon;
    if (id + num === 0) {
      return 1;
    } else if (id + num === 894) {
      return 893;
    }
    return id + num;
  };

  // const getEggGroup = async (name, eggGroups) => {
  //   const groups = Promise.all(
  //     (await eggGroups).results.map(async (group) => {
  //       const response = await fetch(group.url).then((res) => res.json());
  //       const n = response.pokemon_species.some((pokemon) => {
  //         if (name === pokemon.name) {
  //           return true;
  //         }
  //         return false;
  //       });
  //       return n ? group.name : n;
  //     })
  //   );
  //   return groups.then((res) => res.filter((n) => n));
  // };

  const generatePokemonData = () => {
    const {
      name,
      height,
      weight,
      types,
      sprites,
      abilities,
      stats,
      moves,
    } = pokemon;
    const { front_default, front_shiny, back_default, back_shiny } = sprites;

    // const a = fetch("https://pokeapi.co/api/v2/egg-group").then((res) =>
    //   res.json()
    // );

    // getEggGroup(name, a).then((res) => console.log("Groups:", res));

    console.log(pokemonSpecies.flavor_text_entries);
    let description = "";
    pokemonSpecies.flavor_text_entries.some((text) => {
      if (text.language.name === "en") {
        description = text.flavor_text;
        return;
      }
    });

    console.log(pokemonSpecies);

    //Chances of pokemon being female is provided in eigths
    const femaleRate = pokemonSpecies.gender_rate;
    const genderRatioFemale = 12.5 * femaleRate;
    const genderRatioMale = 12.5 * (8 - femaleRate);

    // const catchRate = Math.round((100 / 255) * pokemonSpecies.capture_rate);
    // const hatchSteps = 255 * (pokemonSpecies.hatch_counter + 1);

    let move_learn_level = {};
    moves.forEach((move) => {
      move.version_group_details.forEach((move_level) => {
        if (move_level.move_learn_method.name === "level-up") {
          move_learn_level[move.move.name] = move_level.level_learned_at;
        }
      });
    });

    let items = Object.keys(move_learn_level).map(function (key) {
      return [key, move_learn_level[key]];
    });

    // Sort the array based on the second element
    items.sort(function (first, second) {
      return first[1] - second[1];
    });

    return (
      <Container className="mt=2">
        <Row>
          <Col xs={12} md={6}>
            <Card>
              <Card.Header>
                <h2>{capitaliseName(name)}</h2>
                <img src={front_default} alt={name} />
                <img src={front_shiny} alt={name} />
                <img src={back_default} alt={name} />
                <img src={back_shiny} alt={name} />
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <h5>Abilities</h5>
                    {abilities.map((ability, key) => (
                      <div key={key}>
                        <span>
                          {determineAbility(
                            capitaliseName(ability.ability.name),
                            key,
                            abilities.length
                          )}
                        </span>
                      </div>
                    ))}
                  </Col>
                  <Col>
                    <h5>Type(s)</h5>
                    {types.map((type, key) => (
                      <div key={key}>
                        <Badge
                          className={classes.types}
                          inputType={type.type.name}
                        >
                          {capitaliseName(type.type.name)}
                        </Badge>
                      </div>
                    ))}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>Height</h5>
                    {height / 10} m
                  </Col>
                  <Col>
                    <h5>Weight</h5>
                    {weight / 10} kg
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>Egg Group(s)</h5>
                    {displayEggGroup(pokemonSpecies.egg_groups)}
                  </Col>
                  <Col>
                    <h5>Gender Ratio</h5>
                    {genderRatioMale}% male, {genderRatioFemale}% female
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <h4>Description</h4>
                {description}
                <h4>Base Stats</h4>
                {stats.map((stat, key) => (
                  <div key={key}>
                    <strong>{displayStat(stat.stat.name)}</strong>
                    <ProgressBar
                      now={stat.base_stat}
                      max={255}
                      label={stat.base_stat}
                    />
                    {/* Max is 255 because it is the highest stat across all Pokemon */}
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12} md={4}>
            <Card>
              <Card.Header>
                <h4>Level Up</h4>
              </Card.Header>
              <Card.Body>
                {items.map((move, key) => (
                  <div key={key}>
                    <h6>{"Lv " + move[1] + ": " + capitaliseName(move[0])}</h6>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Header>
                <h4>Technical Machine</h4>
              </Card.Header>
              <Card.Body>
                {moves.map((move, key) => (
                  <div key={key}>
                    <h6>
                      {filterMoveType(
                        capitaliseName(move.move.name),
                        move.version_group_details,
                        "machine"
                      )}
                    </h6>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Header>
                <h4>Egg Moves</h4>
              </Card.Header>
              <Card.Body>
                {moves.map((move, key) => (
                  <div key={key}>
                    <h6>
                      {filterMoveType(
                        capitaliseName(move.move.name),
                        move.version_group_details,
                        "egg"
                      )}
                    </h6>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <div>
      <center>
        {pokemon !== undefined && (
          <Button
            className={classes.returnToPokedex}
            onClick={() => history.push("/" + nextPreviousPokemon(-1))}
          >
            Previous Pokemon
          </Button>
        )}
        {pokemon !== undefined && (
          <Button
            className={classes.returnToPokedex}
            onClick={() => history.push("/")}
          >
            Back to Pokedex
          </Button>
        )}
        {pokemon !== undefined && (
          <Button
            className={classes.returnToPokedex}
            onClick={() => history.push("/" + nextPreviousPokemon(1))}
          >
            Next Pokemon
          </Button>
        )}
        <br></br>
        {pokemon === undefined && (
          <CircularProgress className={classes.spinnerWrapperStyle} />
        )}
      </center>
      {!!pokemon !== undefined && pokemon && generatePokemonData()}
      {pokemon === false && <Typography>Pokemon not found</Typography>}
    </div>
  );
};

export default Pokemon;

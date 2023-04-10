# Goal: an api to manage my pokemon team

# Actions:

- Authenticate.
- Add pokemons to our team.
- See information about our team.
- Delete pokemons of our team.
- Exchange the order of our pokemons.

# REST Design

- Add pokemon: POST /team/pokemons
- See team: GET /team/pokemons
- Delete pokemon: DELETE /team/pokemons/:id
- Exchange the order of our team: PUT /team
- Credential system

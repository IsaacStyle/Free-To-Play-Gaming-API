import Games from "../models/Games.js";

export const getGames = async (req, res) => {
  try {
    const games = await Games.find();
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getGameId = async (req, res) => {
  try {
    const { id } = req.params;
    const games = await Games.findById(id);

    if (games) {
      return res.json(games);
    }

    res.status(404).json({ message: "Game not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createGame = async (req, res) => {
  try {
    await Games.create(req.body)
    res.status(201).json(req.body)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message })
  }
};

export const updateGame = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Games.findByIdAndUpdate(id, req.body);
    res.status(201).json(game);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    const remove = await Games.findByIdAndDelete(id);

    if (remove) {
      return res.status(200).send("Game deleted!");
    }

    throw new Error("Game not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
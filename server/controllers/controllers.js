import { Posts } from "../models/Posts.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll();
    res.json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Posts.findOne({ where: { id: id } });
    res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newPost = await Posts.create({
      name,
      description,
    });

    res.json(newPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const post = await Posts.findByPk(id);
    post.name = name;
    post.description = description;

    await post.save();
    res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Posts.destroy({ where: { id: id } });
    if (!post) {
      return res.status(404).json({ message: "Post  dont exist" });
    } else res.send("Post deleted");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

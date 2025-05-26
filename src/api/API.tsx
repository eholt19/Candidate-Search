const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const searchGithub = async () => {
  try {
    // Smaller range = higher chance of valid users
    const start = Math.floor(Math.random() * 10000) + 1;
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user list");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error in searchGithub:", err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error in searchGithubUser:", err);
    return null;
  }
};

export { searchGithub, searchGithubUser };

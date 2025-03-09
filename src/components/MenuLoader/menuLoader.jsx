// =================== OPTIONAL ====================
export const menuLoader = async ({ params }) => {
  try {
    console.log("Fetching menu item for ID:", params.id); // Log ID

    const response = await fetch(`http://localhost:5000/menu/${params.id}`);

    console.log("Response status:", response.status); // Log status

    if (!response.ok) {
      throw new Response("Not Found", { status: 404 });
    }

    const data = await response.data
    console.log("Fetched Data:", data); // Log fetched data

    return data;
  } catch (error) {
    console.error("Error fetching menu item:", error);
    throw new Response("Failed to load menu item", { status: 500 });
  }
};

export const testCorsRickAndMorty = async () => {
  console.log("testCorsRickAndMorty wird ausgeführt...");
  try {
    const response = await fetch("http://localhost:8080/api/characters/all");
    if (!response.ok) {
      throw new Error("Netzwerkantwort war nicht ok");
    }
    const data = await response.json();
    console.log("✅ CORS funktioniert!", data);
  } catch (error) {
    console.error("❌ CORS Problem:", error);
  }
};

type Language = "en" | "zh" | "ar";

// Map country codes to languages
const countryToLanguage: Record<string, Language> = {
  // Chinese-speaking regions
  CN: "zh", // China
  TW: "zh", // Taiwan
  HK: "zh", // Hong Kong
  MO: "zh", // Macau
  SG: "zh", // Singapore

  // Arabic-speaking countries
  SA: "ar", // Saudi Arabia
  AE: "ar", // UAE
  EG: "ar", // Egypt
  QA: "ar", // Qatar
  KW: "ar", // Kuwait
  OM: "ar", // Oman
  BH: "ar", // Bahrain
  JO: "ar", // Jordan
  LB: "ar", // Lebanon
  SY: "ar", // Syria
  IQ: "ar", // Iraq
  YE: "ar", // Yemen
  PS: "ar", // Palestine
  LY: "ar", // Libya
  TN: "ar", // Tunisia
  DZ: "ar", // Algeria
  MA: "ar", // Morocco
  SD: "ar", // Sudan
  MR: "ar", // Mauritania
  SO: "ar", // Somalia
  DJ: "ar", // Djibouti
  KM: "ar", // Comoros
};

export async function detectLanguageFromGeolocation(): Promise<Language> {
  // Check if user previously denied location
  const locationDenied = localStorage.getItem("locationPermissionDenied");
  if (locationDenied === "true") {
    return detectLanguageFromBrowser();
  }

  try {
    // Check if Geolocation API is supported
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
      return detectLanguageFromBrowser();
    }

    // Get user's coordinates (this will trigger permission prompt)
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 10000,
          maximumAge: 0,
        });
      }
    );

    const { latitude, longitude } = position.coords;
    console.log("Location detected:", latitude, longitude);

    // Convert coordinates to country using reverse geocoding
    const countryCode = await reverseGeocode(latitude, longitude);

    if (countryCode) {
      // Save that location permission was granted
      localStorage.setItem("locationPermissionGranted", "true");

      // Map country to language
      const language = countryToLanguage[countryCode] || "en";
      console.log("Detected country:", countryCode, "→ Language:", language);
      return language;
    }

    // Fallback if reverse geocoding fails
    return detectLanguageFromBrowser();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Geolocation error:", error.message);
    } else {
      console.log("Geolocation error:", error);
    }

    // If user denied permission
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code?: number }).code === 1
    ) {
      localStorage.setItem("locationPermissionDenied", "true");
    }

    // Fallback to browser language
    return detectLanguageFromBrowser();
  }
}

/**
 * Reverse geocode coordinates to country code
 * Uses free BigDataCloud API (no signup required)
 */
async function reverseGeocode(
  latitude: number,
  longitude: number
): Promise<string | null> {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );

    if (!response.ok) throw new Error("Geocoding failed");

    const data = await response.json();
    return data.countryCode as string;
  } catch (error) {
    console.error("Reverse geocoding failed:", error);
    return null;
  }
}

/**
 * Fallback: Detect language from browser settings
 */
function detectLanguageFromBrowser(): Language {
  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith("zh")) return "zh";
  if (browserLang.startsWith("ar")) return "ar";
  return "en";
}

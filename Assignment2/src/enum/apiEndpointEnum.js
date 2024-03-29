let baseUrl = "http://localhost:8080"
// https://four513assignment1evangadsby.onrender.com

export const ApiEndpointEnum = {
  // /api/races/season/:year
  GetSeasonRaces: `${baseUrl}/api/races/season`,
  // /api/qualifying/:raceId
  GetQualifyingByRace: `${baseUrl}/api/qualifying`,
}

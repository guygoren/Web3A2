let baseUrl = "https://four513assignment1evangadsby.onrender.com"
// https://four513assignment1evangadsby.onrender.com

export const ApiEndpointEnum = {
  // /api/races/season/:year
  GetSeasonRaces: `${baseUrl}/api/races/season`,
  // /api/qualifying/:raceId
  GetQualifyingByRace: `${baseUrl}/api/qualifying`,
  // /api/races/:raceid
  GetRaceInformation: `${baseUrl}/api/races`,
  // /api/results/:raceid
  GetRaceResults: `${baseUrl}/api/results/laps`,
  // /api/standings/constructors/:raceId
  GetConstructorStandings: `${baseUrl}/api/standings/constructors`,
  // /api/standings/drivers/:raceId
  GetDriverStandings: `${baseUrl}/api/standings/drivers`
}

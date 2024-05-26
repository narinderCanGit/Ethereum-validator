import axios from 'axios';

const API_BASE_URL = 'https://beaconcha.in/api/v1';

export const fetchValidatorSuggestions = async (userInput) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/validator/${userInput}`);
    return response.data.data ? [response.data.data] : [];
  } catch (error) {
    throw new Error(`Error fetching validator suggestions: ${error.message}`);
  }
};

export const fetchValidatorDetailsApi = async (validatorId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/validator/${validatorId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(`Error fetching validator details: ${error.message}`);
  }
};

export const fetchValidatorAttestationsApi = async (validatorId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/validator/${validatorId}/attestations`);
      return response.data.data;
    } catch (error) {
      throw new Error(`Error fetching validator details: ${error.message}`);
    }
  };

export const fetchValidatorLeaderboard = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/validator/leaderboard`);
    return response.data.data || [];
  } catch (error) {
    throw new Error(`Error fetching validator leaderboard: ${error.message}`);
  }
};

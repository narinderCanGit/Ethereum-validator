import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ValidatorDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [attestations, setAttestations] = useState([]);

  useEffect(() => {
    const fetchValidatorDetails = async () => {
      try {
        const result = await axios.get(`https://beaconcha.in/api/v1/validator/${id}`);
        setDetails(result.data.data);
      } catch (error) {
        console.error("Error fetching validator details", error);
      }
    };

    const fetchValidatorAttestations = async () => {
      try {
        const result = await axios.get(`https://beaconcha.in/api/v1/validator/${id}/attestations`);
        setAttestations(result.data.data);
      } catch (error) {
        console.error("Error fetching validator attestations", error);
      }
    };

    fetchValidatorDetails();
    fetchValidatorAttestations();
  }, [id]);

  const detailKeys = Object.keys(details);

  return (
    <div className="validator-details">
      <h2>Validator Stats</h2>
      {details && detailKeys?.map((key) => (
        <div>
            <p><strong>{key}:</strong> {details[key]}</p>
        </div>
      ))}
      <br/>
      <h3>Attestations</h3>
      {attestations && (
        <ul>
          {attestations.map((attestation, index) => (
            <li key={index}>
              <p><strong>Slot:</strong> {attestation.attesterslot}</p>
              <p><strong>Index:</strong> {attestation.committeeindex}</p>
              <p><strong>Epoch:</strong> {attestation.epoch}</p>
              <p><strong>Inclusions lot:</strong> {attestation.inclusionslot}</p>
              <p><strong>Status:</strong> {attestation.status}</p>
              <p><strong>Validator index:</strong> {attestation.validatorindex}</p>
              <p><strong>Week:</strong> {attestation.week}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ValidatorDetails;

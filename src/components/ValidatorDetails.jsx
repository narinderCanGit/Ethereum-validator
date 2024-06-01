import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchValidatorAttestationsApi, fetchValidatorDetailsApi } from '../api/api';

const ValidatorDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [attestations, setAttestations] = useState([]);

  useEffect(() => {
    const fetchValidatorDetails = async () => {
        const result = await fetchValidatorDetailsApi(id);
        setDetails(result);
    };

    const fetchValidatorAttestations = async () => {
      const result = await fetchValidatorAttestationsApi(id);
        setAttestations(result);
     
    };

    fetchValidatorDetails();
    fetchValidatorAttestations();
  }, [id]);

  const detailKeys = details && Object.keys(details);

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

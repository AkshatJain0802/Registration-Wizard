import { useState, useEffect } from "react";

export default function Step1({ formData, setFormData, nextStep }) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.dob
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  return (
    <div className="card">
      <h2>Personal Information</h2>

      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) =>
          setFormData({ ...formData, lastName: e.target.value })
        }
      />

      <input
        type="date"
        value={formData.dob}
        onChange={(e) =>
          setFormData({ ...formData, dob: e.target.value })
        }
      />

      <button disabled={!isValid} onClick={nextStep}>
        Next
      </button>
    </div>
  );
}
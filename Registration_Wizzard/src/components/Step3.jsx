export default function Step3({ formData, prevStep, nextStep }) {
  const handleSubmit = () => {
    console.log("Final Data:", formData);
    nextStep();
  };

  return (
    <div className="card">
      <h2>Review & Submit</h2>

      <div className="review">
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Date of Birth:</strong> {formData.dob}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>

      <div className="btn-group">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
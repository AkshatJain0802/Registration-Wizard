import { useState, useEffect } from "react";

export default function Step2({
  formData,
  setFormData,
  nextStep,
  prevStep
}) {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (touched.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (touched.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (
      touched.confirmPassword &&
      formData.confirmPassword !== formData.password
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
  }, [formData, touched]);

  const isValid =
    formData.email &&
    formData.password &&
    formData.confirmPassword &&
    Object.keys(errors).length === 0;

  return (
    <div className="card">
      <h2>Account Details</h2>

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        onBlur={() => setTouched({ ...touched, email: true })}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
        onBlur={() => setTouched({ ...touched, password: true })}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        onBlur={() =>
          setTouched({ ...touched, confirmPassword: true })
        }
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      <button
        type="button"
        className="toggle"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>

      <div className="btn-group">
        <button onClick={prevStep}>Back</button>
        <button disabled={!isValid} onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}
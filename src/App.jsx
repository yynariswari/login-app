import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

function App() {
  const [showRememberWarning, setShowRememberWarning] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Login sukses!");
  };

  const onError = (errors) => {
    if (errors.username || errors.password) {
      setShowRememberWarning(true);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f3f6fc" }}
    >
      <Card
        style={{
          width: "360px",
          padding: "32px 40px",
          borderRadius: "14px",
        }}
      >
        <h3 className="text-center mb-4">Welcome to Jayjay Login</h3>

        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukan username"
              {...register("username", { required: true })}
              isInvalid={!!errors.username}
              isValid={!errors.username && watch("username")}
            />

            {!errors.username && watch("username") && (
              <div
                className="text-success mt-1"
                style={{ fontSize: "0.875rem" }}
              >
                Username valid
              </div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Masukan password"
              {...register("password", { required: true })}
              isInvalid={!!errors.password}
              isValid={!errors.password && watch("password")}
            />

            {!errors.password && watch("password") && (
              <div
                className="text-success mt-1"
                style={{ fontSize: "0.875rem" }}
              >
                Password valid
              </div>
            )}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Check
              label="Ingat password"
              onChange={() => setShowRememberWarning(false)}
            />

            {showRememberWarning && (
              <div
                className="text-danger mt-1"
                style={{ fontSize: "0.875rem" }}
              >
                Kamu harus mengingat password!
              </div>
            )}
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Submit form
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default App;

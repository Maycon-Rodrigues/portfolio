import * as React from "react";

interface FormEmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const FormEmailTemplate: React.FC<Readonly<FormEmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        color: "#2c3e50",
        borderBottom: "2px solid #3498db",
        paddingBottom: "10px",
      }}
    >
      Nova Solicitação de Serviços Web
    </h2>

    <div style={{ marginTop: "20px" }}>
      <h3 style={{ color: "#2c3e50" }}>Informações do Cliente:</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td
              style={{
                padding: "8px",
                borderBottom: "1px solid #eee",
                fontWeight: "bold",
              }}
            >
              Nome:
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
              {name}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                borderBottom: "1px solid #eee",
                fontWeight: "bold",
              }}
            >
              E-mail:
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
              {email}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style={{ marginTop: "20px" }}>
      <h3 style={{ color: "#2c3e50" }}>Assunto:</h3>
      <div
        style={{
          padding: "15px",
          backgroundColor: "#f9f9f9",
          borderRadius: "4px",
          border: "1px solid #eee",
          marginTop: "10px",
        }}
      >
        {subject}
      </div>
    </div>

    <div style={{ marginTop: "20px" }}>
      <h3 style={{ color: "#2c3e50" }}>Mensagem:</h3>
      <div
        style={{
          padding: "15px",
          backgroundColor: "#f9f9f9",
          borderRadius: "4px",
          border: "1px solid #eee",
          marginTop: "10px",
        }}
      >
        {message}
      </div>
    </div>

    <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
      <p>Data do contato: {new Date().toLocaleString("pt-BR")}</p>
    </div>

    <div
      style={{
        marginTop: "30px",
        borderTop: "2px solid #3498db",
        paddingTop: "10px",
        fontSize: "12px",
        color: "#666",
      }}
    >
      <p>Este é um email automático gerado pelo sistema de contato do site.</p>
    </div>
  </div>
);

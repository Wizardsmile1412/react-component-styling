/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import './App.css';
import Button from './components/Button';
import Alert from './components/Alert';

function App() {
  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '10px'
  };

  const labelStyle = {
    width: '100px',
    marginRight: '20px'
  };

  const primaryCustomStyle = {
    fontSize: '16px'
  };

  const secondaryCustomStyle = {
    fontSize: '16px'
  };

  const alertContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px'
  };

  return (
    <main>
      <section css={sectionStyle}>
        <label css={labelStyle}>Primary</label>
        <Button type="primary" css={primaryCustomStyle}>Button</Button>
      </section>
      <section css={sectionStyle}>
        <label css={labelStyle}>Secondary</label>
        <Button type="secondary" css={secondaryCustomStyle}>Button</Button>
      </section>

      {/* Render ตัว Alert 4 แบบ */}
      <section css={alertContainerStyle}>
        <Alert type="error">This is error alert box</Alert>
        <Alert type="warning">This is warning alert box</Alert>
        <Alert type="info">This is info alert box</Alert>
        <Alert type="success">This is success alert box</Alert>
      </section>
    </main>
  );
}

export default App;

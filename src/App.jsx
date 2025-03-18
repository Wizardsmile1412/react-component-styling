/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import './App.css';
import Button from './components/Button';

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

  return (
    <main>
      <section css={{...sectionStyle, marginBottom: '20px'}}>
        <label css={labelStyle}>Primary</label>
        <Button type="primary" css={primaryCustomStyle}>Button</Button>
      </section>
      <section css={sectionStyle}>
        <label css={labelStyle}>Secondary</label>
        <Button type="secondary" css={secondaryCustomStyle}>Button</Button>
      </section>
    </main>
  );
}

export default App;

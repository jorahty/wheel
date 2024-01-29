'use client';

import Input from '@mui/joy/Input';
import { useState } from 'react';

export const Form = () => {
  return (
    <div style={{ padding: 20 }}>
      <p>Spin the wheel. What is the probability of getting 💧?</p>
      <MyInput leading="P(💧)" answers={['0.375', '3/8']} />
      <p>Spin the wheel. What is the probability of getting 🔥?</p>
      <MyInput leading="P(🔥)" answers={['0.5', '4/8', '1/2']} />
      <p>
        Spin the wheel. What is the probability of getting 💧 <b>and</b> 🔥?
      </p>
      <MyInput leading="P(💧 ∩ 🔥)" answers={['0.125', '1/8']} />
      <p>
        Spin the wheel. What is the probability of getting 💧 <b>or</b> 🔥?
      </p>
      <MyInput leading="P(💧 ∪ 🔥)" answers={['0.75', '6/8', '3/4']} />
      <p>
        Spin the wheel until you get 💧. When you get 💧, what is the probability of also getting
        🔥?
      </p>
      <MyInput leading="P(🔥|💧)" answers={['0.33', '0.333', '0.3333', '1/3']} />
      <p>
        Spin the wheel until you get 🔥. When you get 🔥, what is the probability of also getting
        💧?
      </p>
      <MyInput leading="P(💧|🔥)" answers={['0.25', '1/4', '2/8']} />
    </div>
  );
};

const MyInput = ({ leading, answers }: any) => {
  const [value, setValue] = useState('');

  const correct = answers.includes(value);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ fontFamily: 'KaTeX_Main', fontSize: 22, color: '#555' }}>{leading} =</div>
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        size="lg"
        color={correct ? 'success' : 'neutral'}
        placeholder="0.00"
        slotProps={{
          input: {
            size: 8,
          },
        }}
      />
      {correct && <div style={{ fontSize: 22, fontWeight: 600, color: '#4a4' }}>✅ Correct!</div>}
    </div>
  );
};

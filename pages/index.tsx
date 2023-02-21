import { useState } from 'react';
function Header({ title } : { title: any}) {
  return (
    <h1>{title ? title : 'Default title'}</h1>
  );
}

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl text-center text-white font-larsseit">alix</h1>
      <p className="text-center text-white">test</p>
    </div>
  );
}
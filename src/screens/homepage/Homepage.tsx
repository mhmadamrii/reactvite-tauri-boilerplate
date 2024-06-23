import { ChangeEvent, useState } from 'react';
import { Store } from 'tauri-plugin-store-api';
import { Button } from '~/components/ui/button';

export default function Homepage() {
  const store = new Store('.settings.dat');
  const [name, setName] = useState<string>('');
  const [storedName, setStoredName] = useState<
    string | { value: string }
  >('');

  const handleSetTauriStore = async () => {
    await store.set('user', name);
    await store.save();
  };

  const handleGetTauriStore = async () => {
    const val = await store.get<{ value: string }>('user');
    console.log('value tauri store', val);
    if (val) {
      setStoredName(val);
    } else {
      setStoredName('Nothing');
    }
    console.log(storedName);
  };

  return (
    <main>
      <h1>Your stored name is: {storedName.toString()}</h1>
      <input
        className="text-black"
        name="name"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <Button onClick={handleSetTauriStore}>
        Set tauri store
      </Button>
      <Button onClick={handleGetTauriStore}>
        Get tauri store
      </Button>
    </main>
  );
}

import { useState } from 'react';
import useCollection from '../hooks/useCollection';
import useRender from '../hooks/useRender';
import Group from './Group';
export default function Groups() {
  const { dispatch } = useRender();
  const { documents, error, loading } = useCollection();

  return (
    <div className="h-full w-[35%] bg-white border-r-2 border-black rounded-l-xl overflow-auto flex flex-col">
      <h2 className=" text-center mb-2 mt-2  text-lg">Groups</h2>
      {error && <p>{error}</p>}
      <div className=" flex-grow overflow-auto">
        {loading && <p>Loading...</p>}
        {documents &&
          documents.map((doc) => <Group key={doc.docId} data={doc} />)}
      </div>
    </div>
  );
}

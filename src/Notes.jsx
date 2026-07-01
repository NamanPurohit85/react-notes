import React, { useState } from "react";

const Notes = () => {
  const [heading, setHeading] = useState("");
  const [detail, setDetail] = useState("");
  const [notes, setNotes] = useState([]);

  const submitHandler = () => {
    if (!heading.trim()) return;
    setNotes([...notes, { id: Date.now(), heading: heading, detail: detail }]);
    setHeading("");
    setDetail("");
  };

  return (
    <div className="h-screen flex overflow-hidden">
      <div className="flex flex-col gap-10 p-10 shrink-0">
        <input
          className="px-5 py-2 border rounded-2xl w-120"
          type="text"
          placeholder="Enter Notes Heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <textarea
          className="px-8 py-4 border rounded-2xl h-30 w-120"
          placeholder="Write Details"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <button
          onClick={submitHandler}
          className="bg-white text-black px-5 py-3 border rounded-2xl h-12 w-30 cursor-pointer"
        >
          Add Notes
        </button>
      </div>

      <div className="flex flex-col flex-1 ml-20 p-8 overflow-hidden border-l-3">
        <h1 className="text-3xl mb-6 shrink-0">Recent Notes</h1>
        <div className="flex flex-wrap gap-10 overflow-y-auto flex-1 content-start">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-white text-black h-70 w-60 rounded-2xl p-4"
            >
              <h2 className="font-bold text-lg mb-2 truncate">
                {note.heading}
              </h2>
              <p className="text-sm text-gray-600">{note.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;

// components/Notes/Notes.jsx
import { ChevronRight, Plus } from "lucide-react";
import "./Notes.css";

const Notes = () => {
  const NoteCard1 = () => (
    <div className="note-card">
      <h3>Follow Up with Mr. Ashton</h3>
      <p className="note-content">
        Following up on our meeting with Mr. Ashton, I wanted to recap the key
        points discussed and outline the action items moving forward. During the
        meeting, we touched upon the project timeline, budget considerations,
        and specific deliverables. Mr. Ashton expressed ...
      </p>
      <div className="attachments">
        <h4>Attachments</h4>
        <div className="attachment-item">
          <div className="attachment-icon image" />
          <span>Screenshot Information.png</span>
        </div>
        <div className="attachment-item">
          <div className="attachment-icon pdf" />
          <span>Important Information.pdf</span>
        </div>
      </div>
      <div className="note-footer">
        <span className="date">21 May, 2024</span>
        <button className="more-button">
          <ChevronRight size={20} color="#7978CB" strokeWidth={3} />
        </button>
      </div>
    </div>
  );

  const NoteCard2 = () => (
    <div className="note-card">
      <h3>Setlist for hackathon</h3>
      <div className="note-content">
        - Project Timeline<br></br>- Budget Considerations<br></br>- Specific
        Deliverables<br></br>- Additional Features for Software Solution
        <br></br>- Detailed Proposal for Review<br></br>- Prepare the PPT
        <br></br>- Review by Ravi<br></br>- GD<br></br>- The Grand Finale
        <br></br>
      </div>
      <div className="note-footer">
        <span className="date">21 May, 2024</span>
        <button className="more-button">
          <ChevronRight size={20} color="#7978CB" strokeWidth={3} />
        </button>
      </div>
    </div>
  );

  const NoteCard3 = () => (
    <div className="note-card">
      <h3>Auroras and Sad Prose</h3>
      <div className="note-content">
        Tears fall like rain on a lonely street
        <br />
        Heart heavy with sorrow, no solace to meet
        <br />
        Memories of joy now turned to dust
        <br />
        In the shadows of sadness, I place my trust
        <br />
        <br />
        Each note a reminder of what used to be
        <br />
        A melody of pain, a symphony for me
        <br />
        Lost in the darkness, searching for light
        <br />
      </div>
      <div className="note-footer">
        <span className="date">21 May, 2024</span>
        <button className="more-button">
          <ChevronRight size={20} color="#7978CB" strokeWidth={3} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="notes-container">
      <div className="notes-header">
        <h2>Notes</h2>
        <div className="header-buttons">
          <button className="add-button">
            <Plus size={28} color="#49CDF9" strokeWidth={3} />
          </button>
          <button className="more-button">
            <ChevronRight size={28} color="#7B68EE" strokeWidth={3} />
          </button>
        </div>
      </div>

      <div className="notes-grid">
        <NoteCard1 />
        <NoteCard2 />
        <NoteCard3 />
      </div>
    </div>
  );
};

export default Notes;

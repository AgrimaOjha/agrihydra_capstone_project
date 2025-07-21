import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import "./convo.css";

export default function CommunityTips() {
  const [tip, setTip] = useState("");
  const [tipsList, setTipsList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tips from Firestore
  const fetchTips = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "tips"), orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const tips = snapshot.docs.map((doc) => doc.data());
      setTipsList(tips);
    } catch (error) {
      console.error("Error fetching tips:", error);
    }
    setLoading(false);
  };

  // Submit new tip
  const handleSubmit = async () => {
    if (!tip.trim()) return;

    try {
      await addDoc(collection(db, "tips"), {
        content: tip,
        author: auth.currentUser?.email || "Anonymous",
        timestamp: serverTimestamp(),
      });

      setTip("");
      fetchTips();
    } catch (error) {
      console.error("Error adding tip:", error);
    }
  };

  useEffect(() => {
    fetchTips();
  }, []);

  return (
    <div className="community-tips-container">
      <h2>💡 Community Hydration Tips</h2>

      {/* Only show input if user is logged in */}
      {auth.currentUser ? (
        <div className="tip-form">
          <textarea
            value={tip}
            onChange={(e) => setTip(e.target.value)}
            placeholder="Share your hydration tip..."
            rows={3}
          />
          <button onClick={handleSubmit} disabled={!tip.trim()}>
            Submit Tip
          </button>
        </div>
      ) : (
        <p style={{ marginBottom: "1rem" }}>
          🔒 Please log in to submit a tip.
        </p>
      )}

      {/* Display tips */}
      <div className="tips-list">
        {loading ? (
          <p>Loading tips...</p>
        ) : tipsList.length === 0 ? (
          <p>No tips yet. Be the first to share!</p>
        ) : (
          tipsList.map((t, index) => (
            <div key={index} className="tip-card">
              <p>
                <strong>{t.author}:</strong> {t.content}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

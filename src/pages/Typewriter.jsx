// src/pages/Typewriter.jsx
import { useEffect, useState, useRef } from "react";

function Typewriter({
  text = "",
  segments = null,
  speed = 50,
  onComplete,
  color = "#ffffff"
}) {
  const [visibleChars, setVisibleChars] = useState(0);
  const audioRef = useRef(null);
  const currentClipRef = useRef(null);

  // Fallback: If a scene passes a regular 'text' string, turn it into a standard segment object.
  const activeSegments = segments || [{ text: text }];

  const totalLength = activeSegments.reduce((acc, seg) => acc + (seg.text || "").length, 0);

  useEffect(() => {
    setVisibleChars(0);
    let count = 0;

    const interval = setInterval(() => {
      count++;
      setVisibleChars(count);

      if (count >= totalLength) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [segments, text, speed, totalLength, onComplete]);

  // Audio Handler Hook: Triggers music when the media-card segment is revealed
  useEffect(() => {
    let charsChecked = 0;

    for (const segment of activeSegments) {
      const segmentLength = (segment.text || "").length;
      
      // If the typewriter timeline has reached this segment
      if (visibleChars > charsChecked) {
        if (segment.type === "media-card" && segment.clip) {
          // Play only if it hasn't started playing this exact clip yet
          if (currentClipRef.current !== segment.clip) {
            currentClipRef.current = segment.clip;
            
            if (audioRef.current) {
              audioRef.current.pause();
            }
            
            audioRef.current = new Audio(segment.clip);
            audioRef.current.play().catch(err => console.log("Audio autoplay blocked or failed:", err));
          }
          break; 
        }
      }
      charsChecked += segmentLength;
    }

    // Cleanup audio when the whole component unmounts or scene changes
    return () => {
      if (visibleChars === 0 && audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
        currentClipRef.current = null;
      }
    };
  }, [visibleChars, activeSegments]);

  // Global clean up on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const renderTypedContent = () => {
    let charsLeft = visibleChars;

    return activeSegments.map((segment, index) => {
      if (charsLeft <= 0) return null;

      const textToShow = segment.text ? segment.text.slice(0, charsLeft) : "";
      if (segment.text) {
        charsLeft -= segment.text.length;
      }

      // 1. BOX STYLE
      if (segment.type === "box") {
        return (
          <span
            key={index}
            style={{
              backgroundColor: segment.boxColor || "#3b82f6",
              color: segment.textColor || "#ffffff",
              padding: "0.15em 0.5em",
              borderRadius: "12px",
              margin: "0 0.2em",
              display: "inline-block",
              fontWeight: "600",
              ...segment.style
            }}
          >
            {textToShow}
          </span>
        );
      }

      // 2. SONG HIGHLIGHT TEXT STYLE
      if (segment.type === "song-highlight") {
        return (
          <span
            key={index}
            style={{
              fontStyle: "italic",
              fontWeight: "bold",
              color: "#f472b6", 
              ...segment.style
            }}
          >
            {textToShow}
          </span>
        );
      }

      // 3. WINDOWS LOCKSCREEN MEDIA CARD STYLE
      if (segment.type === "media-card") {
        return (
          <div
            key={index}
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: segment.songColor || "rgba(30, 30, 30, 0.75)",
              backdropFilter: "blur(20px)",
              color: "#ffffff",
              padding: "12px 20px",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              margin: "15px auto",
              textAlign: "left",
              maxWidth: "350px",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
              gap: "14px",
              fontFamily: "system-ui, -apple-system, sans-serif",
              ...segment.style
            }}
          >
            {/* Thumbnail Placeholder mimicking Windows Media Controls */}
            <div style={{
              width: "48px",
              height: "48px",
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem"
            }}>
              🎵
            </div>
            
            {/* Metadata Text */}
            <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <span style={{ 
                fontSize: "0.95rem", 
                fontWeight: "600", 
                whiteSpace: "nowrap", 
                overflow: "hidden", 
                textOverflow: "ellipsis" 
              }}>
                {segment.songName || "Unknown Track"}
              </span>
              <span style={{ 
                fontSize: "0.8rem", 
                color: "rgba(255, 255, 255, 0.7)",
                whiteSpace: "nowrap", 
                overflow: "hidden", 
                textOverflow: "ellipsis" 
              }}>
                {segment.songArtist || "Unknown Artist"}
              </span>
            </div>
          </div>
        );
      }

      // DEFAULT TEXT
      return (
        <span key={index} style={segment.style}>
          {textToShow}
        </span>
      );
    });
  };

  return (
    <div
      style={{
        color,
        fontSize: "clamp(1.5rem, 4vw, 3rem)",
        lineHeight: 1.6,
        textAlign: "center",
        minHeight: "3em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div>
        {renderTypedContent()}
        <span className="cursor" style={{ marginLeft: "4px" }}>|</span>
      </div>
    </div>
  );
}

export { Typewriter };
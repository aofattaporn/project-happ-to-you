"use client";
import { useEffect, useRef } from "react";

const AudioFooter = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current;
    }
  }, []);

  return (
    <footer className="bg-white rounded-lg  fixed bottom-0 flex flex-wrap justify-center footer-audio shadow-xl ">
      <div className="text-center p-4">
        <p>Please click play to listen to this music</p>
        <div>
          <audio ref={audioRef} controls autoPlay src="/mp3/sukonenueng.mp3">
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
      </div>
    </footer>
  );
};

export default AudioFooter;

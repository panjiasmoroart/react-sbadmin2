import { useEffect } from "react";

function useOutsideClick(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Jika klik terjadi di dalam elemen, abaikan
      if (!ref.current || ref.current.contains(event.target)) return;
      // Jika klik terjadi di luar, panggil handler
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Bersihkan listener saat komponen unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Dependensi: ref dan handler
}

export default useOutsideClick;

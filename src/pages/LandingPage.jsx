import { useState } from "react";
import CryptoJS from "crypto-js";

function LandingPage({ onSuccess, validateStudentId }) {
    const [studentId, setStudentId] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // 🔐 Secret key for AES encryption
    const SECRET_KEY = "my-super-secret-key";

    // ===============================
    // 🔐 AES ENCRYPTION (CONTENT)
    // ===============================
    const encryptText = (text) => {
        return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
    };

    // ===============================
    // 🔓 AES DECRYPTION (CONTENT)
    // ===============================
    const decryptText = (cipherText) => {
        const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    };

    // ===============================
    // 🧷 SHA-256 HASH (FILENAME SAFE)
    // ===============================
    const hashText = (text) => {
        return CryptoJS.SHA256(text).toString();
    };

    // ===============================
    // 🧪 ENCRYPT TOOL (DEV)
    // ===============================
    const handleEncrypt = () => {
        if (!studentId.trim()) {
            console.log("⚠️ No input to encrypt.");
            return;
        }

        const encrypted = encryptText(studentId.trim());

        console.log("========== AES ENCRYPT ==========");
        console.log("Original:", studentId.trim());
        console.log("Encrypted:", encrypted);
        console.log("=================================");
    };

    // ===============================
    // 🧪 DECRYPT TOOL (DEV)
    // ===============================
    const handleDecrypt = () => {
        if (!studentId.trim()) {
            console.log("⚠️ No input to decrypt.");
            return;
        }

        const decrypted = decryptText(studentId.trim());

        console.log("========== AES DECRYPT ==========");
        console.log("Input:", studentId.trim());
        console.log("Decrypted:", decrypted || "❌ Invalid data or key");
        console.log("=================================");
    };

    // ===============================
    // 🧪 HASH TOOL (NEW)
    // ===============================
    const handleHash = () => {
        if (!studentId.trim()) {
            console.log("⚠️ No input to hash.");
            return;
        }

        const hashed = hashText(studentId.trim());

        console.log("========== SHA-256 HASH ==========");
        console.log("Original:", studentId.trim());
        console.log("Hashed (filename safe):", hashed);
        console.log("Example file path:");
        console.log(`/data/${hashed}.json`);
        console.log("==================================");
    };

    // ===============================
    // 🎬 LOGIN FLOW
    // ===============================
    const handleSubmit = async (e) => {
        e.preventDefault(); // Stifles the native HTML page reload behavior

        setError("");
        const sanitizedId = studentId.trim();

        if (!sanitizedId) {
            setError("Please enter your Student ID.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            // Case-insensitive matching logic support
            const exists = validateStudentId(sanitizedId);

            if (!exists) {
                setError("Student ID not found.");
                setLoading(false);
                return;
            }

            setLoading(false);
            onSuccess(sanitizedId);
        }, 1200);
    };

    const titleMessage = "My message for u 🎓";

    return (
        <>
            <div className="particles-layer-1"></div>
            <div className="particles-layer-2"></div>

            <div className="container">
                <div className="card">

                    <h1 className="title">{titleMessage}</h1>

                    <p className="subtitle">
                        Enter the code I gave to you
                    </p>

                    <form onSubmit={handleSubmit} className="form">
                        <input
                            type="text"
                            value={studentId}
                            placeholder="22-00164JUM"
                            onChange={(e) => setStudentId(e.target.value)}
                            className={`input ${error ? "input-error" : ""}`}
                            autoFocus
                        />

                        {/* 🚀 LOGIN BUTTON (Refactored for strict production form binding) */}
                        <button type="submit" className="button" disabled={loading}>
                            {loading ? "Verifying..." : "Enter"}
                        </button>
                    </form>

                    {error && <p className="error">{error}</p>}
                </div>
            </div>
        </>
    );
}

export { LandingPage };
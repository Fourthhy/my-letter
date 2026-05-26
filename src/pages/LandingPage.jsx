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
        const cleanId = studentId.trim().toUpperCase();
        if (!cleanId) {
            console.log("⚠️ No input to encrypt.");
            return;
        }

        const encrypted = encryptText(cleanId);
        console.log("========== AES ENCRYPT ==========");
        console.log("Original:", cleanId);
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
        console.log("Input:", studentId);
        console.log("Decrypted:", decrypted || "❌ Invalid data or key");
        console.log("=================================");
    };

    // ===============================
    // 🧪 HASH TOOL (NEW)
    // ===============================
    const handleHash = () => {
        const cleanId = studentId.trim().toUpperCase();
        if (!cleanId) {
            console.log("⚠️ No input to hash.");
            return;
        }

        const hashed = hashText(cleanId);
        console.log("========== SHA-256 HASH ==========");
        console.log("Original:", cleanId);
        console.log("Hashed (filename safe):", hashed);
        console.log("Example file path:");
        console.log(`/data/${hashed}.json`);
        console.log("==================================");
    };

    // ===============================
    // 🎬 LOGIN FLOW
    // ===============================
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Normalize input: remove trailing spaces and make it UPPERCASE
        const cleanStudentId = studentId.trim().toUpperCase();

        if (!cleanStudentId) {
            setError("Please enter your Student ID.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            // Validate the pristine, normalized ID against your keys
            const exists = validateStudentId(cleanStudentId);

            if (!exists) {
                setError("Student ID not found.");
                setLoading(false);
                return;
            }

            setLoading(false);
            onSuccess(cleanStudentId); // Pass the matching ID back to App.jsx
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
                        />

                        {/* 🚀 LOGIN */}
                        <button className="button" type="submit" disabled={loading}>
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
import { Certificate } from '../types/certificate';

export const certificates: Certificate[] = [
  {
    serialNumber: "MTPL/PR/2024/1001",
    name: "Saloni Kushwaha",
    dateOfIssue: "2023-08-01",
    college: "Tech University",
    course: "Advanced Web Development",
    grade: "A",
    validUntil: "2025-08-01"
  },
  {
    serialNumber: "MTPL/PR/2024/1002",
    name: "Farhat Naaz",
    dateOfIssue: "2024-08-01",
    college: "Digital Institute",
    course: "AI and Machine Learning",
    grade: "A+",
    validUntil: "2026-08-01"
  },
  {
    serialNumber: "MTPL/PR/2024/1003",
    name: "Riya Mathur",
    dateOfIssue: "2024-10-31",
    college: "Tech Academy",
    course: "Cloud Computing",
    grade: "A",
    validUntil: "2026-10-31"
  },
  {
    serialNumber: "MTPL/PR/2024/1004",
    name: "Divya Bobde",
    dateOfIssue: "2024-10-31",
    college: "Innovation School",
    course: "Cybersecurity",
    grade: "A+",
    validUntil: "2026-10-31"
  },
  {
    serialNumber: "MTPL/PR/2024/1005",
    name: "Rishabh Raj",
    dateOfIssue: "2024-10-31",
    college: "Digital University",
    course: "Blockchain Development",
    grade: "A",
    validUntil: "2026-10-31"
  }
];

export const getCertificate = (serialNumber: string): Certificate | undefined => {
  return certificates.find(cert => cert.serialNumber === serialNumber);
};

// Local Storage Implementation
const STORAGE_KEY = 'verified_certificates';

export const saveToLocalStorage = (certificate: Certificate) => {
  const existingData = localStorage.getItem(STORAGE_KEY);
  const verifiedCertificates = existingData ? JSON.parse(existingData) : [];
  
  // Check if certificate already exists
  const exists = verifiedCertificates.some(
    (cert: Certificate) => cert.serialNumber === certificate.serialNumber
  );
  
  if (!exists) {
    verifiedCertificates.push({
      ...certificate,
      verificationDate: new Date().toISOString()
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(verifiedCertificates));
  }
};

export const getVerificationHistory = (): (Certificate & { verificationDate: string })[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { DB } from "../../firebase/firebaseconfig";
import {
  Academy,
  CertificateContainer,
  H5,
  LinkCertificate,
  TitleContainer,
} from "./stylesCertificate";

const Certificates = () => {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const certificatesCollection = collection(DB, "certificates");
    getDocs(certificatesCollection)
      .then((res) => {
        const certificates = res.docs.map((items) => {
          return {
            id: items.id,
            ...items.data(),
          };
        });
        setTitle(certificates);
      })
      .catch((error) => console.error(error))
  }, []);

  return (
    <CertificateContainer>
        {title.map((cert) => (
          <TitleContainer key={cert.id}>
            <H5>{cert.title}</H5>
            <Academy>{cert.academy}</Academy>
            <LinkCertificate href={cert.certificate} target="_BLANK">
              {cert.certificate === "" ? "En Curso..." : "Certificado"}
            </LinkCertificate>
          </TitleContainer>
        ))}
    </CertificateContainer>
  );
};

export default Certificates;

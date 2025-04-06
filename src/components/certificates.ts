import { CertificateType } from './Certificate';
import cert1 from "../assets/certificates/cert1.jpg";
import cert2 from "../assets/certificates/cert2.jpg";
import cert3 from "../assets/certificates/cert3.jpg";
import cert4 from "../assets/certificates/cert4.jpg";
import cert5 from "../assets/certificates/cert5.jpg";
import cert6 from "../assets/certificates/cert6.jpg";
import cert7 from "../assets/certificates/cert7.jpg";
import cert8 from "../assets/certificates/cert8.jpg";
import cert9 from "../assets/certificates/cert9.jpg";
import akademiaHipertrofii from "../assets/logos/akademia-hipertrofii.svg";
import fitAcademy from "../assets/logos/fit-academy.svg";
import gsa from "../assets/logos/global-sport-academy.png";
import podsztangapl from "../assets/logos/podsztanga-pl.svg";
import prawieDzik from "../assets/logos/prawie-dzik.png";
import vademecumHipertrofii from "../assets/logos/vademecum-hipertrofii.svg";
import koncepcjaHipertroficzna from  "../assets/logos/koncepcja-hipertroficzna.svg";

export const certificates: CertificateType[] = [
    {
        trainingName: "Strategie doboru ćwiczeń",
        participantName: "Tomasz Stewarski",
        instructors: ["Paweł Głuchowski"],
        dateIssued: "12-07-2022",
        logos: [
            akademiaHipertrofii
        ],
        certificateImage: cert1,
    },
    {
        trainingName: "Trener personalny i instruktor siłowni",
        participantName: "Tomasz Stewarski",
        instructors: [],
        dateIssued: "24-07-2021",
        logos: [
            fitAcademy
        ],
        certificateImage: cert2,
    },
    {
        trainingName: "Prowadzenie klienta krok po kroku",
        participantName: "Tomasz Stewarski",
        instructors: [],
        dateIssued: "08-03-2023",
        logos: [
            gsa
        ],
        certificateImage: cert3,
    },
    {
        trainingName: "Trójbój Siłowy",
        participantName: "Tomasz Stewarski",
        instructors: ["Paweł Jurczyński", "Rafał Ziewiecki"],
        dateIssued: "11-06-2022",
        logos: [
            podsztangapl
        ],
        certificateImage: cert4,
    },
    {
        trainingName: "Zdrowa i skuteczna redukcja",
        participantName: "Tomasz Stewarski",
        instructors: ["Marek Prawdzik"],
        dateIssued: "11-04-2022",
        logos: [
            prawieDzik
        ],
        certificateImage: cert5,
    },
    {
        trainingName: "Układanie planu dietetycznego - krok po kroku",
        participantName: "Tomasz Stewarski",
        instructors: [],
        dateIssued: "23-06-2022",
        logos: [
            gsa
        ],
        certificateImage: cert6,
    },
    {
        trainingName: "Skuteczny trening kończyn dolnych",
        participantName: "Tomasz Stewarski",
        instructors: [],
        dateIssued: "19-04-2022",
        logos: [
            gsa
        ],
        certificateImage: cert7,
    },
    {
        trainingName: "Układanie planu treningowego - krok po kroku",
        participantName: "Tomasz Stewarski",
        instructors: [],
        dateIssued: "06-05-2022",
        logos: [
            gsa
        ],
        certificateImage: cert8,
    },
    {
        trainingName: "Biomechanika w hipertrofii",
        participantName: "Tomasz Stewarski",
        instructors: ["Paweł Głuchowski", "Krystian Dobropolski"],
        dateIssued: "31-01-2023",
        logos: [
            akademiaHipertrofii,
            vademecumHipertrofii,
            koncepcjaHipertroficzna
        ],
        certificateImage: cert9,
    },
];
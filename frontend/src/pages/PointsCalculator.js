import React, { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
const toggleMe = () => {
    const btn = document.querySelector("#btnToggle");
    const box = document.querySelector(".data");
    box.classList.toggle("show");
};
const toggleMe2 = () => {
    const btn = document.querySelector("#btnToggle2");
    const box = document.querySelector(".data2");
    box.classList.toggle("show");
};
const toggleMe3 = () => {
    const btn = document.querySelector("#btnToggle3");
    const box = document.querySelector(".data3");

    box.classList.toggle("show");
};
const toggleMe4 = () => {
    const btn = document.querySelector("#btnToggle4");
    const box = document.querySelector(".data4");

    box.classList.toggle("show");
};
const toggleMe5 = () => {
    const btn = document.querySelector("#btnToggle5");
    const box = document.querySelector(".data5");

    box.classList.toggle("show");
};
const toggleMe6 = () => {
    const btn = document.querySelector("#btnToggle6");
    const box = document.querySelector(".data6");

    box.classList.toggle("show");
};
const toggleMe7 = () => {
    const btn = document.querySelector("#btnToggle7");
    const box = document.querySelector(".data7");

    box.classList.toggle("show");
};
const questions = [
    {
        id: "q1",
        text: "Select visa subclass",
        type: "radio",
        heading: "Visa subclass",
        answers: [
            {
                id: "a1",
                text: "Business Innovation and Investment (Provisional) visa (subclass 188)",
                points: 0,
                nextQuestion: "q2",
            },
            {
                id: "a2",
                text: "Skilled Independent visa (subclass 189)",
                points: 0,
                nextQuestion: "q11",
            },
            {
                id: "a3",
                text: "Skilled Nominated visa (subclass 190)",
                points: 0,
                nextQuestion: "q22",
            },

            {
                id: "a5",
                text: "Skilled Work Regional (Provisional) visa (subclass 491)",
                points: 0,
                nextQuestion: "q46",
            },
        ],
    },
    {
        id: "q2",
        text: "Which age band do you fit into? ",
        bigHeading:
            "Business Innovation and Investment (Provisional) visa (subclass 188)",
        heading: "Age",
        htmlData: (
            <p>
                To check how many points you might score use the
                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/business-innovation-and-investment-188/points-table">
                    &nbsp; points table.
                </a>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a6",
                text: "Under 18 years",
                points: 0,
                nextQuestion: "q3",
            },
            {
                id: "a7",
                text: "18 to 24 years",
                points: 20,
                nextQuestion: "q3",
            },
            {
                id: "a8",
                text: "25 to 32 years",
                points: 30,
                nextQuestion: "q3",
            },
            {
                id: "a9",
                text: "33 to 39 years",
                points: 25,
                nextQuestion: "q3",
            },
            {
                id: "a10",
                text: "40 to 44 years",
                points: 20,
                nextQuestion: "q3",
            },
            {
                id: "a11",
                text: "45 to 54 years",
                points: 15,
                nextQuestion: "q3",
            },
            {
                id: "a12",
                text: "55 and older",
                points: 0,
                nextQuestion: "q3",
            },
        ],
    },
    {
        id: "q3",
        text: "How would you rate your English language ability?  ",
        bigHeading: "",
        smallHeading: "English language requirements",
        htmlData: (
            <p>
                <span>Read about:</span>
                <ul>
                    <li>
                        <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/vocational-english">
                            Vocational English
                        </a>
                    </li>
                    <li>
                        <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/proficient-english">
                            Proficient English
                        </a>
                    </li>
                </ul>
            </p>
        ),
        heading: "English language:",
        type: "select",
        answers: [
            {
                id: "a13",
                text: "Vocational English",
                points: 5,
                nextQuestion: "q4",
            },
            {
                id: "a14",
                text: "Proficient English",
                points: 10,
                nextQuestion: "q4",
            },
            {
                id: "a15",
                text: "Not applicable",
                points: 0,
                nextQuestion: "q4",
            },
        ],
    },
    {
        id: "q4",
        text: "What is your highest qualification?  ",
        bigHeading: "",
        smallHeading: "Educational Qualifications",
        htmlData: null,
        heading: "Educational Qualifications:",
        type: "radio",
        answers: [
            {
                id: "a16",
                text: "Trade certificate, diploma or bachelor degree by an Australian education institute; or a bachelor qualification recognised by an educational institution of a recognised standard",
                points: 5,
                nextQuestion: "q5",
            },
            {
                id: "a17",
                text: "A Bachelor degree in business, science or technology by an Australian institution; or a bachelor qualification in business, science or technology by an educational institution of a recognised standard",
                points: 10,
                nextQuestion: "q5",
            },
            {
                id: "a18",
                text: "Not applicable",
                points: 0,
                nextQuestion: "q5",
            },
        ],
    },
    {
        id: "q5",
        text: "The nominating State or Territory government agency has determined that your proposed business is of unique and important benefit to the State or Territory where the nominating government agency is located   ",
        bigHeading: "",
        smallHeading: "Special endorsement",
        htmlData: null,
        heading: "Special endorsement:",
        type: "radio",
        answers: [
            {
                id: "a19",
                text: "Yes",
                points: 10,
                nextQuestion: "q6",
            },
            {
                id: "a20",
                text: "No",
                points: 0,
                nextQuestion: "q6",
            },
        ],
    },
    {
        id: "q6",
        text: "Net business and personal assets of you, your partner or you and your partner combined in each of the preceding 2 fiscal years of at least:  ",
        bigHeading: "",
        smallHeading: "Financial assets",
        htmlData: null,
        heading: "Financial assets:",
        type: "select",
        answers: [
            {
                id: "a21",
                text: "Not less than AUD1.25 million",
                points: 5,
                nextQuestion: "q7",
            },
            {
                id: "a22",
                text: "Not less than AUD1.75 million",
                points: 15,
                nextQuestion: "q7",
            },
            {
                id: "a23",
                text: "Not less than AUD2.25 million",
                points: 25,
                nextQuestion: "q7",
            },
            {
                id: "a24",
                text: "Not less than AUD2.75 million",
                points: 35,
                nextQuestion: "q7",
            },
            {
                id: "a25",
                text: "Not applicable",
                points: 0,
                nextQuestion: "q7",
            },
        ],
    },
    {
        id: "q7",
        text: "You had an ownership interest in one or more main businesses that had an annual turnover in at least 2 of the 4 fiscal years immediately before the time of invitation to apply for the visa: ",
        bigHeading: "",
        smallHeading: "Business turnover",
        htmlData: null,
        heading: "Business turnover:",
        type: "select",
        answers: [
            {
                id: "a26",
                text: "Not less than AUD750,000",
                points: 5,
                nextQuestion: "q8",
            },
            {
                id: "a27",
                text: "Not less than AUD1.25 million",
                points: 15,
                nextQuestion: "q8",
            },
            {
                id: "a28",
                text: "Not less than AUD1.75 million",
                points: 25,
                nextQuestion: "q8",
            },
            {
                id: "a29",
                text: "Not less than AUD2.25 million",
                points: 35,
                nextQuestion: "q8",
            },
            {
                id: "a30",
                text: "Not applicable",
                points: 0,
                nextQuestion: "q8",
            },
        ],
    },
    {
        id: "q8",
        text: "You have held one or more main businesses before you were invited to apply for the visa for:  ",
        bigHeading: "",
        smallHeading: "Business Innovation stream only -  Business experience",
        htmlData: null,
        heading: "Business Innovation stream only Business experience",
        type: "radio",
        answers: [
            {
                id: "a31",
                text: "Not less than 4 years within the preceding 5 years",
                points: 10,
                nextQuestion: "q9",
            },
            {
                id: "a32",
                text: "Not less than 7 years within the preceding 8 years",
                points: 15,
                nextQuestion: "q9",
            },
            {
                id: "a33",
                text: "Not applicable",
                points: 0,
                nextQuestion: "q9",
            },
        ],
    },
    {
        id: "q9",
        text: "Immediately before the time of application you held eligible investments of at least AUD250,000 held for:  ",
        bigHeading: "",
        smallHeading: "Investor stream only - Investor experience",
        htmlData: null,
        heading: "Investor stream only Investor experience:",
        type: "radio",
        answers: [
            {
                id: "a34",
                text: "Not less than 4 years before the time of invitation to apply for the visa",
                points: 10,
                nextQuestion: "q10",
            },
            {
                id: "a35",
                text: "Not less than 7 years before the time of invitation to apply for the visa",
                points: 15,
                nextQuestion: "q10",
            },
            {
                id: "a36",
                text: "Not applicable",
                points: 0,
                nextQuestion: "q10",
            },
        ],
    },

    // option 2
    {
        id: "q10",
        text: "Select your business qualifications:  ",
        bigHeading: "",
        smallHeading: "Business innovation qualifications",
        htmlData: null,
        heading: "Business innovation qualifications:",
        type: "select",
        answers: [
            {
                id: "a37",
                text: "Patents or designs registered not less than 1 year before that time and used in the day to day activities of the main business",
                points: 15,
                nextQuestion: "q10",
            },
            {
                id: "a38",
                text: "Trademarks registered not less than 1 year before that time and used in the day to day activities of the main business",
                points: 10,
                nextQuestion: "q10",
            },
            {
                id: "a39",
                text: "An ownership in and day to day participation in the management of one or more main business operated under a formal joint venture agreement/s entered into no less than 1 year before the time",
                points: 5,
                nextQuestion: "q10",
            },
            {
                id: "a40",
                text: "An ownership interest in a main business/s that derives no less than 50% of its annual turnover from export trade",
                points: 15,
                nextQuestion: "q10",
            },
            {
                id: "a41",
                text: "An ownership interest in a main buisness/s not more that 5 years before had an average annualised growth in turnover that was greater than 20% per annum over 3 continuous fiscal years and in at least one of the 3 fiscal years employed 10 or more employees for a total number of hours that was at least the total number of hours that would have been worked by 10 full-time employees",
                points: 10,
                nextQuestion: "q10",
            },
            {
                id: "a42",
                text: "An ownership interest in a main business/s that received a grant from a government body in your home country of at least AUD10,000 for the purposes of early phase start up of a business, product commercialisation, business development or business expansion",
                points: 10,
                nextQuestion: "q10",
            },
            {
                id: "a43",
                text: "An ownership interest in a main business/s that received venture capital funding of at least AUD100,000 not more than 4 years before the time of the invitation for the purposes of early phase start up of a business, product commercialisation, business development or business expansion",
                points: 10,
                nextQuestion: "q10",
            },
            {
                id: "a44",
                text: "Not applicable",
                points: 0,
                nextQuestion: "q10",
            },
        ],
    },
    {
        id: "q11",
        text: "Which age band do you fit into? ",
        bigHeading: "",
        heading: "Age:",
        smallHeading: "Skilled Independent visa (subclass 189)",
        htmlData: (
            <p>
                To check how many points you might score use the
                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-table">
                    &nbsp; points table.
                </a>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a45",
                text: "	at least 18 but less than 25 years",
                points: 25,
                nextQuestion: "q12",
            },
            {
                id: "a46",
                text: "at least 25 but less than 33 years",
                points: 30,
                nextQuestion: "q12",
            },
            {
                id: "a47",
                text: "at least 33 but less than 40 years	",
                points: 25,
                nextQuestion: "q12",
            },
            {
                id: "a48",
                text: "at least 40 but less than 45 years",
                points: 15,
                nextQuestion: "q12",
            },
        ],
    },
    {
        id: "q12",
        text: "How would you rate your English language ability? ",
        bigHeading: "",
        heading: "English language:",
        smallHeading: "English language requirements",
        htmlData: (
            <p>
                Read the{" "}
                <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language">
                    English language skills
                </a>{" "}
                requirements.
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a49",
                text: "	Competent English	",
                points: 0,
                nextQuestion: "q13",
            },
            {
                id: "a50",
                text: "Proficient English	",
                points: 10,
                nextQuestion: "q13",
            },
            {
                id: "a51",
                text: "Superior English		",
                points: 20,
                nextQuestion: "q13",
            },
        ],
    },
    {
        id: "q13",
        text: "Overseas skilled employment – (outside Australia):  ",
        bigHeading: "",
        heading: " Work experience outside Australia:",
        smallHeading: " ",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Skilled employment experience </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle"}
                        onClick={toggleMe}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data">
                    <p>
                        <li>
                            You can only claim points for employment if the employment was in
                            your nominated skilled occupation or a closely related skilled
                            occupation; and you were employed for the relevant periods set out
                            in the table, in the 10 years before you are invited to apply.
                        </li>
                        <li>
                            For any Australian employment you must have held a substantive
                            visa or a {" "}
                            <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-a-010">
                                Bridging A
                            </a>{" "}
                            or
                            <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-b-020">
                                Bridging B
                            </a>
                            visa and complied with the conditions of that visa to be eligible
                            for points.
                        </li>
                        Employed means engaged in an occupation for remuneration for at
                        least 20 hours a week. Closely-related occupations must be:
                        <ul>
                            <li>in the same ANZSCO Unit Group or</li>
                            <li>consistent with a career advancement pathway or</li>
                            <li>
                                recognised by an assessing authority that it is closely related
                                to your nominated occupation, as part of your skills assessment
                            </li>
                        </ul>
                        Under the points test there is a cap on the number of points that
                        can be awarded for employment experience. The maximum number of
                        points that can be awarded is 20, this means that even if you score
                        more than 20 combined points for your employment experience only 20
                        points will be awarded.
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a52",
                text: "	Less than 3 years	",
                points: 0,
                nextQuestion: "q14",
            },
            {
                id: "a53",
                text: "At least 3 but less than 5 years	",
                points: 5,
                nextQuestion: "q14",
            },
            {
                id: "a54",
                text: "At least 5 but less than 8 years	",
                points: 10,
                nextQuestion: "q14",
            },
            {
                id: "a55",
                text: "At least 8 years",
                points: 15,
                nextQuestion: "q14",
            },
        ],
    },
    {
        id: "q14",
        text: "Australian skilled employment – (in Australia):   ",
        bigHeading: "",
        heading: "Work experience in Australia: ",
        smallHeading: " ",
        htmlData: null,
        type: "select",
        answers: [
            {
                id: "a56",
                text: "	Less than 1 year",
                points: 0,
                nextQuestion: "q15",
            },
            {
                id: "a57",
                text: "At least 1 but less than 3 years",
                points: 5,
                nextQuestion: "q15",
            },
            {
                id: "a58",
                text: "At least 3 but less than 5 years",
                points: 10,
                nextQuestion: "q15",
            },
            {
                id: "a59",
                text: "At least 5 but less than 8 years",
                points: 15,
                nextQuestion: "q15",
            },
            {
                id: "a60",
                text: "At least 8 years",
                points: 20,
                nextQuestion: "q15",
            },
        ],
    },
    {
        id: "q15",
        text: "What is your highest educational qualification?   ",
        bigHeading: "",
        heading: " Qualifications",
        smallHeading: " ",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Educational qualifications </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle2"}
                        onClick={toggleMe2}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data2">
                    <p>
                        For points based migration you will receive points for your highest
                        qualification only.
                        <h3>Recognition of your qualifications</h3>
                        <p>
                            The authority undertaking your skills assessment may determine if
                            your qualifications are comparable to the relevant Australian
                            qualification. Assessing authorities are listed against your
                            occupation in the relevant list of{" "}
                            <a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list">
                                eligible skilled occupations
                            </a>
                            . You must have obtained this recognition at the time you are
                            invited to apply for a visa.
                            <br />
                            If you hold an overseas qualification at bachelor level or above
                            and your skills assessing authority did not offer an opinion on
                            that qualification then it is open to you to contact Vocational
                            Education Training and Assessment Services (VETASSESS) for advice.
                            <br />
                            VETASSESS can provide an assessment of the comparative educational
                            level of these qualifications against the Australian
                            Qualifications Framework (AQF). Advice from VETASSESS should be
                            provided with your application to support your claim for these
                            points.
                            <br />
                            To obtain an assessment contact{" "}
                            <a href="https://www.vetassess.com.au/">
                                Vocational Education Training and Assessment Services.
                            </a>
                        </p>
                        <h3>Doctoral requirements (PhD)</h3>
                        <p>
                            You can only be awarded points for a doctoral degree if you have
                            completed a qualification at the relevant level, that is, a Doctor
                            of Philosophy (PhD). You cannot claim these points for the award
                            of other qualifications that give you the right to use to the
                            title of Doctor (that is, general practitioner, dentist, vet).
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a61",
                text: "A Doctorate from an Australian educational institution or a Doctorate from another educational institution, that is of a recognised standard	",
                points: 20,
                nextQuestion: "q16",
            },
            {
                id: "a62",
                text: "At least a Bachelor degree from an Australian educational institution or at least a Bachelor qualification, from another educational institution, that is of a recognised standard",
                points: 15,
                nextQuestion: "q16",
            },
            {
                id: "a63",
                text: "A diploma or trade qualification from an Australian educational institution	",
                points: 10,
                nextQuestion: "q16",
            },
            {
                id: "a64",
                text: "Attained a qualification or award recognised by the relevant assessing authority for your nominated skilled occupation as being suitable for that occupation",
                points: 10,
                nextQuestion: "q16",
            },
            {
                id: "a65",
                text: "Not applicable	",
                points: 0,
                nextQuestion: "q16",
            },
        ],
    },
    {
        id: "q16",
        text: "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement?  ",
        bigHeading: "",
        heading: " Australian study requirement",
        smallHeading: " Australian study requirement",
        htmlData: (
            <p>
                To claim this read{" "}
                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/australian-study-requirement">
                    Australian study requirement
                </a>{" "}
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a66",
                text: "Yes	",
                points: 5,
                nextQuestion: "q17",
            },
            {
                id: "a67",
                text: "No",
                points: 0,
                nextQuestion: "q17",
            },
        ],
    },
    {
        id: "q17",
        text: "Do you have a Masters degree by research or a Doctorate degree from an Australian educational institution that included at least 2 academic years to in a relevant field?  ",
        bigHeading: "",
        heading: "Specialist education qualification",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Specialist education qualification </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle3"}
                        onClick={toggleMe3}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data3">
                    <p>
                        The postgraduate degree by research (doctorate or masters) must be
                        awarded from an Australian education institution after at least 2
                        academic years of study in the following science, technology,
                        engineering, mathematics or specified information and communication
                        technology (ICT) fields:
                        <h3>Natural and physical sciences</h3>
                        <ul>
                            <li>biological sciences</li>
                            <li>chemical sciences</li>
                            <li>earth sciences</li>
                            <li>mathematical sciences</li>
                            <li>natural and physical sciences</li>
                            <li>other natural and physical sciences</li>
                            <li>physics and astronomy</li>
                        </ul>
                        <h3>Information technology</h3>
                        <ul>
                            <li>computer science</li>
                            <li>information systems</li>
                            <li>information technology</li>
                            <li>other information technology</li>
                        </ul>
                        <h3>Engineering and related technologies</h3>
                        <ul>
                            <li>aerospace engineering and technology</li>
                            <li>civil engineering</li>
                            <li>electrical and electronic engineering and technology</li>
                            <li>engineering and related technologies</li>
                            <li>geomatics engineering</li>
                            <li>manufacturing engineering and technology</li>
                            <li>maritime engineering and technology</li>
                            <li>mechanical and industrial engineering and technology</li>
                            <li>other engineering and related technologies</li>
                            <li>process and resources engineering.</li>
                        </ul>
                        <p>
                            To determine whether your qualification is eligible, see the{" "}
                            <a href="http://cricos.education.gov.au/">CRICOS</a> website.
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a68",
                text: "Yes	",
                points: 10,
                nextQuestion: "q18",
            },
            {
                id: "a69",
                text: "No",
                points: 0,
                nextQuestion: "q18",
            },
        ],
    },
    {
        id: "q18",
        text: "Have you been accredited at the paraprofessional level or above, certified at the certified provisional level or above, or have a community language credential for interpreting or translating by the National Accreditation Authority for Translators and Interpreters.*?   ",
        bigHeading: "",
        heading: "Accredition in a community language:",
        smallHeading: "Credentialled community language",
        htmlData: (
            <p>
                <a href="http://www.naati.com.au/">
                    *National Accreditation Authority for Translators and Interpreters
                </a>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a70",
                text: "Yes	",
                points: 5,
                nextQuestion: "q19",
            },
            {
                id: "a71",
                text: "No",
                points: 0,
                nextQuestion: "q19",
            },
        ],
    },
    {
        id: "q19",
        text: "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that satisfies the Australian study requirement obtained while living and studying in an eligible area of regional Australia?   ",
        bigHeading: "",
        heading: "Study in regional Australia",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Study in regional Australia </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle4"}
                        onClick={toggleMe4}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data4">
                    <p>
                        To be eligible for the award of points your educational
                        qualification:
                        <ul>
                            <li>
                                must meet the{" "}
                                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/australian-study-requirement">
                                    Australian study requirement
                                </a>
                            </li>
                            <li>
                                have been obtained while you lived in, and studied at a campus
                                in a designated regional area
                            </li>
                            <li>not include study undertaken by distance education</li>
                        </ul>
                        <p>
                            To determine whether your qualification is eligible, see the{" "}
                            <a href="http://cricos.education.gov.au/">CRICOS</a> website.
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a72",
                text: "Yes	",
                points: 5,
                nextQuestion: "q20",
            },
            {
                id: "a73",
                text: "No",
                points: 0,
                nextQuestion: "q20",
            },
        ],
    },
    {
        id: "q20",
        text: "Select the relevant partner skills qualifications:   ",
        bigHeading: "",
        heading: "Partner skills",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Partner skills </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle5"}
                        onClick={toggleMe5}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data5">
                    <p>
                        Your spouse or de facto partner must also be an applicant for this
                        visa and meet age, English and skill criteria For you to be eligible
                        for the award of these points your partner must be an applicant for
                        the same visa subclass and must not be an Australian permanent
                        resident or an Australian citizen. Additionally, you will need to
                        provide evidence that when you were invited to apply for this visa
                        that they:
                        <ul>
                            <li>were under 45 years old</li>
                            <li>
                                had{" "}
                                <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/competent-english">
                                    competent English
                                </a>
                            </li>
                            <li>
                                had nominated a skilled occupation that is on the same skilled
                                occupation list as your nominated skilled occupation
                            </li>
                            <li>
                                had a suitable skills assessment from the relevant assessing
                                authority for their nominated skilled occupation, and the
                                assessment wasn’t for a Subclass 485 visa.
                            </li>
                        </ul>
                        <p>
                            Your spouse or de facto partner must also be an applicant for this
                            visa and has{" "}
                            <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/competent-english">
                                competent English
                            </a>
                            For you to be eligible for the award of these points your partner
                            must be an applicant for the same visa subclass and must not be an
                            Australian permanent resident or an Australian citizen.
                        </p>
                        <p>
                            You are single or your partner is an Australian citizen or
                            permanent resident
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a74",
                text: "Your spouse or de facto partner must also be an applicant for this visa and meet age, English and skill criteria",
                points: 10,
                nextQuestion: "q21",
            },
            {
                id: "a75",
                text: "Your spouse or de facto partner must also be an applicant for this visa and has competent English",
                points: 5,
                nextQuestion: "q21",
            },
            {
                id: "a76",
                text: "You are single or your partner is an Australian citizen or permanent resident",
                points: 10,
                nextQuestion: "q21",
            },
        ],
    },
    {
        id: "q21",
        text: "Did you complete a professional year in Australia?   ",
        bigHeading: "",
        heading: "Professional year in Australia",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Professional year in Australia </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle6"}
                        onClick={toggleMe6}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data6">
                    <p>
                        At the time of invitation to apply, you had completed a Professional
                        Year. To be eligible for the award of these points your Professional
                        Year must have been in Accounting, ICT/Computing or Engineering,
                        and:
                        <ul>
                            <li>
                                in your nominated occupation or a closely related occupation
                            </li>
                            <li>completed over a period of at least 12 months</li>
                            <li>
                                completed in Australia in the four years before you are invited
                                to apply for a visa*
                            </li>
                            <li>provided by one of these organisations</li>
                            <li>
                                the{" "}
                                <a href="http://www.acs.org.au/">Australian Computer Society</a>
                            </li>
                            <li>
                                <a href="http://www.cpaaustralia.com.au/">CPA Australia</a>
                            </li>
                            <li>
                                <a href="https://www.charteredaccountantsanz.com/">
                                    Chartered Accountants Australia and New Zealand
                                </a>
                            </li>
                            <li>
                                <a href="http://www.publicaccountants.org.au/">
                                    the Institute of Public Accountants (formerly the National
                                    Institute of Accountants)
                                </a>
                            </li>
                            <li>
                                <a href="http://www.eeaust.com.au/">Engineers Australia.</a>
                            </li>
                        </ul>
                        <p>
                            * Where a Professional Year program was completed, meaning
                            finished, within the 48 month period prior to the time of
                            invitation, you may be awarded 5 points. To avoid any doubt, you
                            could have commenced the Professional Year at a time before the 48
                            months prior to invitation. The time you “completed” a
                            Professional Year is the date listed on your official Record of
                            Completion which is issued by the authorised body or Professional
                            Year program delivery partner.
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a77",
                text: "Yes	",
                points: 5,
                nextQuestion: null,
            },
            {
                id: "a78",
                text: "No",
                points: 0,
                nextQuestion: null,
            },
        ],
    },
    // 3rd option
    {
        id: "q22",
        text: "Which age band do you fit into? ",
        bigHeading: "",
        heading: "Age:",
        smallHeading: "Skilled Nominated visa (subclass 190)",
        htmlData: (
            <p>
                To check how many points you might score use the
                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-nominated-190/points-table">
                    &nbsp; points table.
                </a>
                <br />
                Note: ​Points criteria are assessed at the time of invitation.
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a79",
                text: "	at least 18 but less than 25 years",
                points: 25,
                nextQuestion: "q23",
            },
            {
                id: "a80",
                text: "at least 25 but less than 33 years",
                points: 30,
                nextQuestion: "q23",
            },
            {
                id: "a81",
                text: "at least 33 but less than 40 years	",
                points: 25,
                nextQuestion: "q23",
            },
            {
                id: "a82",
                text: "at least 40 but less than 45 years",
                points: 15,
                nextQuestion: "q23",
            },
        ],
    },
    {
        id: "q23",
        text: "How would you rate your English language ability? ",
        bigHeading: "",
        heading: "English language:",
        smallHeading: "English language requirements",
        htmlData: (
            <p>
                Read the{" "}
                <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language">
                    English language skills
                </a>{" "}
                requirements.
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a83",
                text: "	Competent English	",
                points: 0,
                nextQuestion: "q24",
            },
            {
                id: "a84",
                text: "Proficient English	",
                points: 10,
                nextQuestion: "q24",
            },
            {
                id: "a85",
                text: "Superior English		",
                points: 20,
                nextQuestion: "q24",
            },
        ],
    },
    {
        id: "q24",
        text: "Overseas skilled employment – (outside Australia):  ",
        bigHeading: "",
        heading: " Work experience outside Australia:",
        smallHeading: " ",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Skilled employment experience </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle"}
                        onClick={toggleMe}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data">
                    <p>
                        <li>
                            You can only claim points for employment if the employment was in
                            your nominated skilled occupation or a closely related skilled
                            occupation; and you were employed for the relevant periods set out
                            in the table, in the 10 years before you are invited to apply.
                        </li>
                        <li>
                            For any Australian employment you must have held a substantive
                            visa or a {" "}
                            <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-a-010">
                                Bridging A
                            </a>{" "}
                            or
                            <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-b-020">
                                Bridging B
                            </a>
                            visa and complied with the conditions of that visa to be eligible
                            for points.
                        </li>
                        Employed means engaged in an occupation for remuneration for at
                        least 20 hours a week. Closely-related occupations must be:
                        <ul>
                            <li>in the same ANZSCO Unit Group or</li>
                            <li>consistent with a career advancement pathway or</li>
                            <li>
                                recognised by an assessing authority that it is closely related
                                to your nominated occupation, as part of your skills assessment
                            </li>
                        </ul>
                        Under the points test there is a cap on the number of points that
                        can be awarded for employment experience. The maximum number of
                        points that can be awarded is 20, this means that even if you score
                        more than 20 combined points for your employment experience only 20
                        points will be awarded.
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a86",
                text: "	Less than 3 years	",
                points: 0,
                nextQuestion: "q25",
            },
            {
                id: "a87",
                text: "At least 3 but less than 5 years	",
                points: 5,
                nextQuestion: "q25",
            },
            {
                id: "a88",
                text: "At least 5 but less than 8 years	",
                points: 10,
                nextQuestion: "q25",
            },
            {
                id: "a89",
                text: "At least 8 years",
                points: 15,
                nextQuestion: "q25",
            },
        ],
    },
    {
        id: "q25",
        text: "Australian skilled employment – (in Australia):   ",
        bigHeading: "",
        heading: "Work experience in Australia: ",
        smallHeading: " ",
        htmlData: null,
        type: "select",
        answers: [
            {
                id: "a90",
                text: "	Less than 1 year",
                points: 0,
                nextQuestion: "q26",
            },
            {
                id: "a91",
                text: "At least 1 but less than 3 years",
                points: 5,
                nextQuestion: "q26",
            },
            {
                id: "a92",
                text: "At least 3 but less than 5 years",
                points: 10,
                nextQuestion: "q26",
            },
            {
                id: "a93",
                text: "At least 5 but less than 8 years",
                points: 15,
                nextQuestion: "q26",
            },
            {
                id: "a94",
                text: "At least 8 years",
                points: 20,
                nextQuestion: "q26",
            },
        ],
    },
    {
        id: "q26",
        text: "What is your highest educational qualification?   ",
        bigHeading: "",
        heading: " Qualifications",
        smallHeading: " ",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Educational qualifications </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle2"}
                        onClick={toggleMe2}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data2">
                    <p>
                        For points based migration you will receive points for your highest
                        qualification only.
                        <h3>Recognition of your qualifications</h3>
                        <p>
                            The authority undertaking your skills assessment may determine if
                            your qualifications are comparable to the relevant Australian
                            qualification. Assessing authorities are listed against your
                            occupation in the relevant list of{" "}
                            <a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list">
                                eligible skilled occupations
                            </a>
                            . You must have obtained this recognition at the time you are
                            invited to apply for a visa.
                            <br />
                            If you hold an overseas qualification at bachelor level or above
                            and your skills assessing authority did not offer an opinion on
                            that qualification then it is open to you to contact Vocational
                            Education Training and Assessment Services (VETASSESS) for advice.
                            <br />
                            VETASSESS can provide an assessment of the comparative educational
                            level of these qualifications against the Australian
                            Qualifications Framework (AQF). Advice from VETASSESS should be
                            provided with your application to support your claim for these
                            points.
                            <br />
                            To obtain an assessment contact{" "}
                            <a href="https://www.vetassess.com.au/">
                                Vocational Education Training and Assessment Services.
                            </a>
                        </p>
                        <h3>Doctoral requirements (PhD)</h3>
                        <p>
                            You can only be awarded points for a doctoral degree if you have
                            completed a qualification at the relevant level, that is, a Doctor
                            of Philosophy (PhD). You cannot claim these points for the award
                            of other qualifications that give you the right to use to the
                            title of Doctor (that is, general practitioner, dentist, vet).
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a95",
                text: "A Doctorate from an Australian educational institution or a Doctorate from another educational institution, that is of a recognised standard",
                points: 20,
                nextQuestion: "q27",
            },
            {
                id: "a96",
                text: "At least a Bachelor degree from an Australian educational institution or at least a Bachelor qualification, from another educational institution, that is of a recognised standard",
                points: 15,
                nextQuestion: "q27",
            },
            {
                id: "a97",
                text: "A diploma or trade qualification from an Australian educational institution",
                points: 10,
                nextQuestion: "q27",
            },
            {
                id: "a98",
                text: "Attained a qualification or award recognised by the relevant assessing authority for your nominated skilled occupation as being suitable for that occupation",
                points: 10,
                nextQuestion: "q27",
            },
        ],
    },
    {
        id: "q27",
        text: "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement?  ",
        bigHeading: "",
        heading: " Australian study requirement",
        smallHeading: " Australian study requirement",
        htmlData: (
            <p>
                To claim this read{" "}
                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/australian-study-requirement">
                    Australian study requirement
                </a>{" "}
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a99",
                text: "Yes	",
                points: 5,
                nextQuestion: "q28",
            },
            {
                id: "a100",
                text: "No",
                points: 0,
                nextQuestion: "q28",
            },
        ],
    },
    {
        id: "q28",
        text: "Do you have a Masters degree by research or a Doctorate degree from an Australian educational institution that included at least 2 academic years to in a relevant field?  ",
        bigHeading: "",
        heading: "Specialist education qualification",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Specialist education qualification </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle3"}
                        onClick={toggleMe3}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data3">
                    <p>
                        The postgraduate degree by research (doctorate or masters) must be
                        awarded from an Australian education institution after at least 2
                        academic years of study in the following science, technology,
                        engineering, mathematics or specified information and communication
                        technology (ICT) fields:
                        <h3>Natural and physical sciences</h3>
                        <ul>
                            <li>biological sciences</li>
                            <li>chemical sciences</li>
                            <li>earth sciences</li>
                            <li>mathematical sciences</li>
                            <li>natural and physical sciences</li>
                            <li>other natural and physical sciences</li>
                            <li>physics and astronomy</li>
                        </ul>
                        <h3>Information technology</h3>
                        <ul>
                            <li>computer science</li>
                            <li>information systems</li>
                            <li>information technology</li>
                            <li>other information technology</li>
                        </ul>
                        <h3>Engineering and related technologies</h3>
                        <ul>
                            <li>aerospace engineering and technology</li>
                            <li>civil engineering</li>
                            <li>electrical and electronic engineering and technology</li>
                            <li>engineering and related technologies</li>
                            <li>geomatics engineering</li>
                            <li>manufacturing engineering and technology</li>
                            <li>maritime engineering and technology</li>
                            <li>mechanical and industrial engineering and technology</li>
                            <li>other engineering and related technologies</li>
                            <li>process and resources engineering.</li>
                        </ul>
                        <p>
                            To determine whether your qualification is eligible, see the{" "}
                            <a href="http://cricos.education.gov.au/">CRICOS</a> website.
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a101",
                text: "Yes	",
                points: 10,
                nextQuestion: "q29",
            },
            {
                id: "a102",
                text: "No",
                points: 0,
                nextQuestion: "q29",
            },
        ],
    },
    {
        id: "q29",
        text: "Have you been accredited at the paraprofessional level or above, certified at the certified provisional level or above, or have a community language credential for interpreting or translating by the National Accreditation Authority for Translators and Interpreters.*?   ",
        bigHeading: "",
        heading: "Accredition in a community language:",
        smallHeading: "Credentialled community language",
        htmlData: (
            <p>
                <a href="http://www.naati.com.au/">
                    *National Accreditation Authority for Translators and Interpreters
                </a>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a103",
                text: "Yes	",
                points: 5,
                nextQuestion: "q30",
            },
            {
                id: "a104",
                text: "No",
                points: 0,
                nextQuestion: "q30",
            },
        ],
    },
    {
        id: "q30",
        text: "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that satisfies the Australian study requirement obtained while living and studying in an eligible area of regional Australia?   ",
        bigHeading: "",
        heading: "Study in regional Australia",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Study in regional Australia </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle4"}
                        onClick={toggleMe4}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data4">
                    <p>
                        To be eligible for the award of points your educational
                        qualification:
                        <ul>
                            <li>
                                must meet the{" "}
                                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/australian-study-requirement">
                                    Australian study requirement
                                </a>
                            </li>
                            <li>
                                have been obtained while you lived in, and studied at a campus
                                in a designated regional area
                            </li>
                            <li>not include study undertaken by distance education</li>
                        </ul>
                        <p>
                            To determine whether your qualification is eligible, see the{" "}
                            <a href="http://cricos.education.gov.au/">CRICOS</a> website.
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a105",
                text: "Yes	",
                points: 5,
                nextQuestion: "q31",
            },
            {
                id: "a106",
                text: "No",
                points: 0,
                nextQuestion: "q31",
            },
        ],
    },
    {
        id: "q31",
        text: "Select the relevant partner skills qualifications:   ",
        bigHeading: "",
        heading: "Partner skills",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Partner skills </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle5"}
                        onClick={toggleMe5}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data5">
                    <p>
                        Your spouse or de facto partner must also be an applicant for this
                        visa and meet age, English and skill criteria For you to be eligible
                        for the award of these points your partner must be an applicant for
                        the same visa subclass and must not be an Australian permanent
                        resident or an Australian citizen. Additionally, you will need to
                        provide evidence that when you were invited to apply for this visa
                        that they:
                        <ul>
                            <li>were under 45 years old</li>
                            <li>
                                had{" "}
                                <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/competent-english">
                                    competent English
                                </a>
                            </li>
                            <li>
                                had nominated a skilled occupation that is on the same skilled
                                occupation list as your nominated skilled occupation
                            </li>
                            <li>
                                had a suitable skills assessment from the relevant assessing
                                authority for their nominated skilled occupation, and the
                                assessment wasn’t for a Subclass 485 visa.
                            </li>
                        </ul>
                        <p>
                            Your spouse or de facto partner must also be an applicant for this
                            visa and has{" "}
                            <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/competent-english">
                                competent English
                            </a>
                            For you to be eligible for the award of these points your partner
                            must be an applicant for the same visa subclass and must not be an
                            Australian permanent resident or an Australian citizen.
                        </p>
                        <p>
                            You are single or your partner is an Australian citizen or
                            permanent resident
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a107",
                text: "Your spouse or de facto partner must also be an applicant for this visa and meet age, English and skill criteria	",
                points: 10,
                nextQuestion: "q32",
            },
            {
                id: "a108",
                text: "Your spouse or de facto partner must also be an applicant for this visa and has competent English",
                points: 5,
                nextQuestion: "q32",
            },
            {
                id: "a109",
                text: "You are single or your partner is an Australian citizen or permanent resident",
                points: 10,
                nextQuestion: "q32",
            },
        ],
    },
    {
        id: "q32",
        text: "Did you complete a professional year in Australia?   ",
        bigHeading: "",
        heading: "Professional year in Australia",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Professional year in Australia </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle6"}
                        onClick={toggleMe6}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data6">
                    <p>
                        At the time of invitation to apply, you had completed a Professional
                        Year. To be eligible for the award of these points your Professional
                        Year must have been in Accounting, ICT/Computing or Engineering,
                        and:
                        <ul>
                            <li>
                                in your nominated occupation or a closely related occupation
                            </li>
                            <li>completed over a period of at least 12 months</li>
                            <li>
                                completed in Australia in the four years before you are invited
                                to apply for a visa*
                            </li>
                            <li>provided by one of these organisations</li>
                            <li>
                                the{" "}
                                <a href="http://www.acs.org.au/">Australian Computer Society</a>
                            </li>
                            <li>
                                <a href="http://www.cpaaustralia.com.au/">CPA Australia</a>
                            </li>
                            <li>
                                <a href="https://www.charteredaccountantsanz.com/">
                                    Chartered Accountants Australia and New Zealand
                                </a>
                            </li>
                            <li>
                                <a href="http://www.publicaccountants.org.au/">
                                    the Institute of Public Accountants (formerly the National
                                    Institute of Accountants)
                                </a>
                            </li>
                            <li>
                                <a href="http://www.eeaust.com.au/">Engineers Australia.</a>
                            </li>
                        </ul>
                        <p>
                            * Where a Professional Year program was completed, meaning
                            finished, within the 48 month period prior to the time of
                            invitation, you may be awarded 5 points. To avoid any doubt, you
                            could have commenced the Professional Year at a time before the 48
                            months prior to invitation. The time you “completed” a
                            Professional Year is the date listed on your official Record of
                            Completion which is issued by the authorised body or Professional
                            Year program delivery partner.
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a110",
                text: "Yes	",
                points: 5,
                nextQuestion: "q33",
            },
            {
                id: "a111",
                text: "No",
                points: 0,
                nextQuestion: "q33",
            },
        ],
    },
    {
        id: "q33",
        text: "Have you been invited to apply for a Skilled Nominated visa (subclass 190) and the nominating State or Territory government agency has not withdrawn the nomination?   ",
        bigHeading: "",
        heading: "Nomination",
        smallHeading: "Nomination",
        htmlData: null,
        type: "radio",
        answers: [
            {
                id: "a112",
                text: "Yes	",
                points: 5,
                nextQuestion: null,
            },
            {
                id: "a113",
                text: "No",
                points: 0,
                nextQuestion: null,
            },
        ],
    },
    // 4th option

    {
        id: "q34",
        text: "Which age band do you fit into? ",
        bigHeading: "",
        heading: "Age:",
        smallHeading: "Skilled Regional (Provisional) visa (subclass 489)",
        htmlData: (
            <p>
                To check how many points you might score use the
                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-regional-provisional-489/points-table">
                    &nbsp; points table.
                </a>
                <br />
                Note: ​Points criteria are assessed at the time of invitation.
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a114",
                text: "	at least 18 but less than 25 years",
                points: 25,
                nextQuestion: "q35",
            },
            {
                id: "a115",
                text: "at least 25 but less than 33 years",
                points: 30,
                nextQuestion: "q35",
            },
            {
                id: "a116",
                text: "at least 33 but less than 40 years	",
                points: 25,
                nextQuestion: "q35",
            },
            {
                id: "a117",
                text: "at least 40 but less than 45 years",
                points: 15,
                nextQuestion: "q35",
            },
        ],
    },
    {
        id: "q35",
        text: "How would you rate your English language ability? ",
        bigHeading: "",
        heading: "English language skills:",
        smallHeading: "English language requirements",
        htmlData: (
            <p>
                Read the{" "}
                <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language">
                    English language skills
                </a>{" "}
                requirements.
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a118",
                text: "	Competent English	",
                points: 0,
                nextQuestion: "q36",
            },
            {
                id: "a119",
                text: "Proficient English	",
                points: 10,
                nextQuestion: "q36",
            },
            {
                id: "a120",
                text: "Superior English		",
                points: 20,
                nextQuestion: "q36",
            },
        ],
    },
    {
        id: "q36",
        text: "Overseas skilled employment – (outside Australia):  ",
        bigHeading: "",
        heading: " Work experience outside Australia:",
        smallHeading: " ",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Skilled employment experience </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle"}
                        onClick={toggleMe}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data">
                    <p>
                        <li>
                            You can only claim points for employment if the employment was in
                            your nominated skilled occupation or a closely related skilled
                            occupation; and you were employed for the relevant periods set out
                            in the table, in the 10 years before you are invited to apply.
                        </li>
                        <li>
                            For any Australian employment you must have held a substantive
                            visa or a {" "}
                            <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-a-010">
                                Bridging A
                            </a>{" "}
                            or
                            <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-b-020">
                                Bridging B
                            </a>
                            visa and complied with the conditions of that visa to be eligible
                            for points.
                        </li>
                        Employed means engaged in an occupation for remuneration for at
                        least 20 hours a week. Closely-related occupations must be:
                        <ul>
                            <li>in the same ANZSCO Unit Group or</li>
                            <li>consistent with a career advancement pathway or</li>
                            <li>
                                recognised by an assessing authority that it is closely related
                                to your nominated occupation, as part of your skills assessment
                            </li>
                        </ul>
                        Under the points test there is a cap on the number of points that
                        can be awarded for employment experience. The maximum number of
                        points that can be awarded is 20, this means that even if you score
                        more than 20 combined points for your employment experience only 20
                        points will be awarded.
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a121",
                text: "	Less than 3 years	",
                points: 0,
                nextQuestion: "q37",
            },
            {
                id: "a122",
                text: "At least 3 but less than 5 years	",
                points: 5,
                nextQuestion: "q37",
            },
            {
                id: "a123",
                text: "At least 5 but less than 8 years	",
                points: 10,
                nextQuestion: "q37",
            },
            {
                id: "a124",
                text: "At least 8 years",
                points: 15,
                nextQuestion: "q37",
            },
        ],
    },
    {
        id: "q37",
        text: "Australian skilled employment – (in Australia):   ",
        bigHeading: "",
        heading: "Work experience in Australia: ",
        smallHeading: " ",
        htmlData: null,
        type: "select",
        answers: [
            {
                id: "a125",
                text: "	Less than 1 year",
                points: 0,
                nextQuestion: "q38",
            },
            {
                id: "a126",
                text: "At least 1 but less than 3 years",
                points: 5,
                nextQuestion: "q38",
            },
            {
                id: "a127",
                text: "At least 3 but less than 5 years",
                points: 10,
                nextQuestion: "q38",
            },
            {
                id: "a128",
                text: "At least 5 but less than 8 years",
                points: 15,
                nextQuestion: "q38",
            },
            {
                id: "a129",
                text: "At least 8 years",
                points: 20,
                nextQuestion: "q38",
            },
        ],
    },
    {
        id: "q38",
        text: "What is your highest educational qualification?   ",
        bigHeading: "",
        heading: " Qualifications",
        smallHeading: " ",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Educational qualifications </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle2"}
                        onClick={toggleMe2}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data2">
                    <p>
                        For points based migration you will receive points for your highest
                        qualification only.
                        <h3>Recognition of your qualifications</h3>
                        <p>
                            The authority undertaking your skills assessment may determine if
                            your qualifications are comparable to the relevant Australian
                            qualification. Assessing authorities are listed against your
                            occupation in the relevant list of{" "}
                            <a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list">
                                eligible skilled occupations
                            </a>
                            . You must have obtained this recognition at the time you are
                            invited to apply for a visa.
                            <br />
                            If you hold an overseas qualification at bachelor level or above
                            and your skills assessing authority did not offer an opinion on
                            that qualification then it is open to you to contact Vocational
                            Education Training and Assessment Services (VETASSESS) for advice.
                            <br />
                            VETASSESS can provide an assessment of the comparative educational
                            level of these qualifications against the Australian
                            Qualifications Framework (AQF). Advice from VETASSESS should be
                            provided with your application to support your claim for these
                            points.
                            <br />
                            To obtain an assessment contact{" "}
                            <a href="https://www.vetassess.com.au/">
                                Vocational Education Training and Assessment Services.
                            </a>
                        </p>
                        <h3>Doctoral requirements (PhD)</h3>
                        <p>
                            You can only be awarded points for a doctoral degree if you have
                            completed a qualification at the relevant level, that is, a Doctor
                            of Philosophy (PhD). You cannot claim these points for the award
                            of other qualifications that give you the right to use to the
                            title of Doctor (that is, general practitioner, dentist, vet).
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a130",
                text: "A Doctorate degree from an Australian educational institution or a Doctorate from another educational institution that is of a recognised standard.",
                points: 20,
                nextQuestion: "q39",
            },
            {
                id: "a131",
                text: "A Bachelor degree from an Australian educational institution or a Bachelor qualification, from another educational institution that is of a recognised standard.",
                points: 15,
                nextQuestion: "q39",
            },
            {
                id: "a132",
                text: "A diploma or trade qualification completed in Australia",
                points: 10,
                nextQuestion: "q39",
            },
            {
                id: "a133",
                text: "An award or qualification the relevant assessing authority for your nominated skilled occupation recognises .",
                points: 10,
                nextQuestion: "q39",
            },
        ],
    },
    {
        id: "q39",
        text: "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement?  ",
        bigHeading: "",
        heading: " Australian study requirement",
        smallHeading: " Australian study requirement",
        htmlData: (
            <p>
                To claim this read{" "}
                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/australian-study-requirement">
                    Australian study requirement
                </a>{" "}
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a134",
                text: "Yes	",
                points: 5,
                nextQuestion: "q40",
            },
            {
                id: "a135",
                text: "No",
                points: 0,
                nextQuestion: "q40",
            },
        ],
    },
    {
        id: "q40",
        text: "Do you have a Masters degree by research or a Doctorate degree from an Australian educational institution that included at least 2 academic years to in a relevant field?  ",
        bigHeading: "",
        heading: "Specialist education qualification",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Specialist education qualification </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle3"}
                        onClick={toggleMe3}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data3">
                    <p>
                        The postgraduate degree by research (doctorate or masters) must be
                        awarded from an Australian education institution after at least 2
                        academic years of study in the following science, technology,
                        engineering, mathematics or specified information and communication
                        technology (ICT) fields:
                        <h3>Natural and physical sciences</h3>
                        <ul>
                            <li>biological sciences</li>
                            <li>chemical sciences</li>
                            <li>earth sciences</li>
                            <li>mathematical sciences</li>
                            <li>natural and physical sciences</li>
                            <li>other natural and physical sciences</li>
                            <li>physics and astronomy</li>
                        </ul>
                        <h3>Information technology</h3>
                        <ul>
                            <li>computer science</li>
                            <li>information systems</li>
                            <li>information technology</li>
                            <li>other information technology</li>
                        </ul>
                        <h3>Engineering and related technologies</h3>
                        <ul>
                            <li>aerospace engineering and technology</li>
                            <li>civil engineering</li>
                            <li>electrical and electronic engineering and technology</li>
                            <li>engineering and related technologies</li>
                            <li>geomatics engineering</li>
                            <li>manufacturing engineering and technology</li>
                            <li>maritime engineering and technology</li>
                            <li>mechanical and industrial engineering and technology</li>
                            <li>other engineering and related technologies</li>
                            <li>process and resources engineering.</li>
                        </ul>
                        <p>
                            To determine whether your qualification is eligible, see the{" "}
                            <a href="http://cricos.education.gov.au/">CRICOS</a> website.
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a136",
                text: "Yes	",
                points: 5,
                nextQuestion: "q41",
            },
            {
                id: "a137",
                text: "No",
                points: 0,
                nextQuestion: "q41",
            },
        ],
    },
    {
        id: "q41",
        text: "Have you been accredited at the paraprofessional level or above, certified at the certified provisional level or above, or have a community language credential for interpreting or translating by the National Accreditation Authority for Translators and Interpreters.*?   ",
        bigHeading: "",
        heading: "Accredition in a community language:",
        smallHeading: "Credentialled community language",
        htmlData: (
            <p>
                <a href="http://www.naati.com.au/">
                    *National Accreditation Authority for Translators and Interpreters
                </a>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a138",
                text: "Yes	",
                points: 5,
                nextQuestion: "q42",
            },
            {
                id: "a139",
                text: "No",
                points: 0,
                nextQuestion: "q42",
            },
        ],
    },
    {
        id: "q42",
        text: "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that satisfies the Australian study requirement obtained while living and studying in an eligible area of regional Australia?   ",
        bigHeading: "",
        heading: "Study in regional Australia",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Study in regional Australia </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle4"}
                        onClick={toggleMe4}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data4">
                    <p>
                        To be eligible for the award of points your educational
                        qualification:
                        <ul>
                            <li>
                                must meet the{" "}
                                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/australian-study-requirement">
                                    Australian study requirement
                                </a>
                            </li>
                            <li>
                                have been obtained while you lived in, and studied at a campus
                                in a designated regional area
                            </li>
                            <li>not include study undertaken by distance education</li>
                        </ul>
                        <p>
                            To determine whether your qualification is eligible, see the{" "}
                            <a href="http://cricos.education.gov.au/">CRICOS</a> website.
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a140",
                text: "Yes	",
                points: 5,
                nextQuestion: "q43",
            },
            {
                id: "a141",
                text: "No",
                points: 0,
                nextQuestion: "q43",
            },
        ],
    },
    {
        id: "q43",
        text: "Select the relevant partner skills qualifications:   ",
        bigHeading: "",
        heading: "Partner skills",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Partner skills </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle5"}
                        onClick={toggleMe5}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data5">
                    <p>
                        Your spouse or de facto partner must also be an applicant for this
                        visa and meet age, English and skill criteria For you to be eligible
                        for the award of these points your partner must be an applicant for
                        the same visa subclass and must not be an Australian permanent
                        resident or an Australian citizen. Additionally, you will need to
                        provide evidence that when you were invited to apply for this visa
                        that they:
                        <ul>
                            <li>were under 45 years old</li>
                            <li>
                                had{" "}
                                <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/competent-english">
                                    competent English
                                </a>
                            </li>
                            <li>
                                had nominated a skilled occupation that is on the same skilled
                                occupation list as your nominated skilled occupation
                            </li>
                            <li>
                                had a suitable skills assessment from the relevant assessing
                                authority for their nominated skilled occupation, and the
                                assessment wasn’t for a Subclass 485 visa.
                            </li>
                        </ul>
                        <p>
                            Your spouse or de facto partner must also be an applicant for this
                            visa and has{" "}
                            <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/competent-english">
                                competent English
                            </a>
                            For you to be eligible for the award of these points your partner
                            must be an applicant for the same visa subclass and must not be an
                            Australian permanent resident or an Australian citizen.
                        </p>
                        <p>
                            You are single or your partner is an Australian citizen or
                            permanent resident
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a142",
                text: "Your spouse or de facto partner must also be an applicant for this visa and meet age, English and skill criteria	",
                points: 10,
                nextQuestion: "q44",
            },
            {
                id: "a143",
                text: "Your spouse or de facto partner must also be an applicant for this visa and has competent English",
                points: 5,
                nextQuestion: "q44",
            },
            {
                id: "a144",
                text: "You are single or your partner is an Australian citizen or permanent resident",
                points: 10,
                nextQuestion: "q44",
            },
        ],
    },
    {
        id: "q44",
        text: "Did you complete a professional year in Australia?   ",
        bigHeading: "",
        heading: "Professional year in Australia",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Professional year in Australia </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle6"}
                        onClick={toggleMe6}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data6">
                    <p>
                        At the time of invitation to apply, you had completed a Professional
                        Year. To be eligible for the award of these points your Professional
                        Year must have been in Accounting, ICT/Computing or Engineering,
                        and:
                        <ul>
                            <li>
                                in your nominated occupation or a closely related occupation
                            </li>
                            <li>completed over a period of at least 12 months</li>
                            <li>
                                completed in Australia in the four years before you are invited
                                to apply for a visa*
                            </li>
                            <li>provided by one of these organisations</li>
                            <li>
                                the{" "}
                                <a href="http://www.acs.org.au/">Australian Computer Society</a>
                            </li>
                            <li>
                                <a href="http://www.cpaaustralia.com.au/">CPA Australia</a>
                            </li>
                            <li>
                                <a href="https://www.charteredaccountantsanz.com/">
                                    Chartered Accountants Australia and New Zealand
                                </a>
                            </li>
                            <li>
                                <a href="http://www.publicaccountants.org.au/">
                                    the Institute of Public Accountants (formerly the National
                                    Institute of Accountants)
                                </a>
                            </li>
                            <li>
                                <a href="http://www.eeaust.com.au/">Engineers Australia.</a>
                            </li>
                        </ul>
                        <p>
                            * Where a Professional Year program was completed, meaning
                            finished, within the 48 month period prior to the time of
                            invitation, you may be awarded 5 points. To avoid any doubt, you
                            could have commenced the Professional Year at a time before the 48
                            months prior to invitation. The time you “completed” a
                            Professional Year is the date listed on your official Record of
                            Completion which is issued by the authorised body or Professional
                            Year program delivery partner.
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a145",
                text: "Yes	",
                points: 5,
                nextQuestion: "q45",
            },
            {
                id: "a146",
                text: "No",
                points: 0,
                nextQuestion: "q45",
            },
        ],
    },
    {
        id: "q45",
        text: "Have you been nominated or sponsored to apply for this visa?  ",
        bigHeading: "",
        heading: "Nomination or sponsorship",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Nomination or sponsorship </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle7"}
                        onClick={toggleMe7}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data7">
                    <p>
                        <p>
                            You must have been nominated or stated you would be sponsored by
                            an eligible family member to be invited to apply for this visa.
                        </p>
                        <p>
                            For nominated applicants provided your nomination remains in
                            effect, you may be eligible for the award of these points.
                        </p>
                        <p>
                            For sponsored applicants provided your sponsorship has been
                            approved, you may be eligible for the award of these points.
                        </p>
                        <p>
                            Information on sponsorship and nomination is available for the{" "}
                            <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-regional-provisional-489/invited-pathway">
                                Skilled Regional (Provisional) visa (subclass 489) invited
                                pathway.
                            </a>{" "}
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a147",
                text: "You were invited to apply for a Skilled Regional (Provisional) (subclass 489) visa because you were nominated and the nominating State or Territory government agency has not withdrawn that nomination	",
                points: 15,
                nextQuestion: null,
            },
            {
                id: "a148",
                text: "You are being sponsored for a Skilled Regional (Provisional) (subclass 489) visa by a family member and the Minister has accepted that sponsorship",
                points: 15,
                nextQuestion: null,
            },
            {
                id: "a149",
                text: "Not applicable",
                points: 0,
                nextQuestion: null,
            },
        ],
    },
    // 5th option
    {
        id: "q46",
        text: "Which age band do you fit into? ",
        bigHeading: "",
        heading: "Age:",
        smallHeading: "Skilled Work Regional (provisional) visa (subclass 491)",
        htmlData: (
            <p>
                To check how many points you might score use the
                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-work-regional-provisional-491/points-table">
                    &nbsp; points table.
                </a>
                <br />
                Note: ​Points criteria are assessed at the time of invitation.
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a114",
                text: "	at least 18 but less than 25 years",
                points: 25,
                nextQuestion: "q47",
            },
            {
                id: "a115",
                text: "at least 25 but less than 33 years",
                points: 30,
                nextQuestion: "q47",
            },
            {
                id: "a116",
                text: "at least 33 but less than 40 years	",
                points: 25,
                nextQuestion: "q47",
            },
            {
                id: "a117",
                text: "at least 40 but less than 45 years",
                points: 15,
                nextQuestion: "q47",
            },
        ],
    },
    {
        id: "q47",
        text: "How would you rate your English language ability? ",
        bigHeading: "",
        heading: "English language skills:",
        smallHeading: "English language requirements",
        htmlData: (
            <p>
                Read the{" "}
                <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language">
                    English language skills
                </a>{" "}
                requirements.
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a118",
                text: "	Competent English	",
                points: 0,
                nextQuestion: "q48",
            },
            {
                id: "a119",
                text: "Proficient English	",
                points: 10,
                nextQuestion: "q48",
            },
            {
                id: "a120",
                text: "Superior English		",
                points: 20,
                nextQuestion: "q48",
            },
        ],
    },
    {
        id: "q48",
        text: "Overseas skilled employment – (outside Australia):  ",
        bigHeading: "",
        heading: " Work experience outside Australia:",
        smallHeading: " ",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Skilled employment experience </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle"}
                        onClick={toggleMe}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data">
                    <p>
                        <li>
                            You can only claim points for employment if the employment was in
                            your nominated skilled occupation or a closely related skilled
                            occupation; and you were employed for the relevant periods set out
                            in the table, in the 10 years before you are invited to apply.
                        </li>
                        <li>
                            For any Australian employment you must have held a substantive
                            visa or a {" "}
                            <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-a-010">
                                Bridging A
                            </a>{" "}
                            or
                            <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-b-020">
                                Bridging B
                            </a>
                            visa and complied with the conditions of that visa to be eligible
                            for points.
                        </li>
                        Employed means engaged in an occupation for remuneration for at
                        least 20 hours a week. Closely-related occupations must be:
                        <ul>
                            <li>in the same ANZSCO Unit Group or</li>
                            <li>consistent with a career advancement pathway or</li>
                            <li>
                                recognised by an assessing authority that it is closely related
                                to your nominated occupation, as part of your skills assessment
                            </li>
                        </ul>
                        Under the points test there is a cap on the number of points that
                        can be awarded for employment experience. The maximum number of
                        points that can be awarded is 20, this means that even if you score
                        more than 20 combined points for your employment experience only 20
                        points will be awarded.
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a121",
                text: "	Less than 3 years	",
                points: 0,
                nextQuestion: "q49",
            },
            {
                id: "a122",
                text: "At least 3 but less than 5 years	",
                points: 5,
                nextQuestion: "q49",
            },
            {
                id: "a123",
                text: "At least 5 but less than 8 years	",
                points: 10,
                nextQuestion: "q49",
            },
            {
                id: "a124",
                text: "At least 8 years",
                points: 15,
                nextQuestion: "q49",
            },
        ],
    },
    {
        id: "q49",
        text: "Australian skilled employment – (in Australia):   ",
        bigHeading: "",
        heading: "Work experience in Australia: ",
        smallHeading: " ",
        htmlData: null,
        type: "select",
        answers: [
            {
                id: "a125",
                text: "	Less than 1 year",
                points: 0,
                nextQuestion: "q50",
            },
            {
                id: "a126",
                text: "At least 1 but less than 3 years",
                points: 5,
                nextQuestion: "q50",
            },
            {
                id: "a127",
                text: "At least 3 but less than 5 years",
                points: 10,
                nextQuestion: "q50",
            },
            {
                id: "a128",
                text: "At least 5 but less than 8 years",
                points: 15,
                nextQuestion: "q50",
            },
            {
                id: "a129",
                text: "At least 8 years",
                points: 20,
                nextQuestion: "q50",
            },
        ],
    },
    {
        id: "q50",
        text: "What is your highest educational qualification?   ",
        bigHeading: "",
        heading: " Qualifications",
        smallHeading: " ",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Educational qualifications </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle2"}
                        onClick={toggleMe2}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data2">
                    <p>
                        For points based migration you will receive points for your highest
                        qualification only.
                        <h3>Recognition of your qualifications</h3>
                        <p>
                            The authority undertaking your skills assessment may determine if
                            your qualifications are comparable to the relevant Australian
                            qualification. Assessing authorities are listed against your
                            occupation in the relevant list of{" "}
                            <a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list">
                                eligible skilled occupations
                            </a>
                            . You must have obtained this recognition at the time you are
                            invited to apply for a visa.
                            <br />
                            If you hold an overseas qualification at bachelor level or above
                            and your skills assessing authority did not offer an opinion on
                            that qualification then it is open to you to contact Vocational
                            Education Training and Assessment Services (VETASSESS) for advice.
                            <br />
                            VETASSESS can provide an assessment of the comparative educational
                            level of these qualifications against the Australian
                            Qualifications Framework (AQF). Advice from VETASSESS should be
                            provided with your application to support your claim for these
                            points.
                            <br />
                            To obtain an assessment contact{" "}
                            <a href="https://www.vetassess.com.au/">
                                Vocational Education Training and Assessment Services.
                            </a>
                        </p>
                        <h3>Doctoral requirements (PhD)</h3>
                        <p>
                            You can only be awarded points for a doctoral degree if you have
                            completed a qualification at the relevant level, that is, a Doctor
                            of Philosophy (PhD). You cannot claim these points for the award
                            of other qualifications that give you the right to use to the
                            title of Doctor (that is, general practitioner, dentist, vet).
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a130",
                text: "A Doctorate degree from an Australian educational institution or a Doctorate from another educational institution that is of a recognised standard.	",
                points: 20,
                nextQuestion: "q51",
            },
            {
                id: "a131",
                text: "A Bachelor degree from an Australian educational institution or a Bachelor qualification, from another educational institution that is of a recognised standard.",
                points: 15,
                nextQuestion: "q51",
            },
            {
                id: "a132",
                text: "A diploma or trade qualification completed in Australia",
                points: 10,
                nextQuestion: "q51",
            },
            {
                id: "a133",
                text: "An award or qualification the relevant assessing authority for your nominated skilled occupation recognises .",
                points: 10,
                nextQuestion: "q51",
            },
        ],
    },
    {
        id: "q51",
        text: "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement?  ",
        bigHeading: "",
        heading: " Australian study requirement",
        smallHeading: " Australian study requirement",
        htmlData: (
            <p>
                To claim this read{" "}
                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/australian-study-requirement">
                    Australian study requirement
                </a>{" "}
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a134",
                text: "Yes	",
                points: 5,
                nextQuestion: "q52",
            },
            {
                id: "a135",
                text: "No",
                points: 0,
                nextQuestion: "q52",
            },
        ],
    },
    {
        id: "q52",
        text: "Do you have a Masters degree by research or a Doctorate degree from an Australian educational institution that included at least 2 academic years to in a relevant field?  ",
        bigHeading: "",
        heading: "Specialist education qualification",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Specialist education qualification </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle3"}
                        onClick={toggleMe3}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data3">
                    <p>
                        The postgraduate degree by research (doctorate or masters) must be
                        awarded from an Australian education institution after at least 2
                        academic years of study in the following science, technology,
                        engineering, mathematics or specified information and communication
                        technology (ICT) fields:
                        <h3>Natural and physical sciences</h3>
                        <ul>
                            <li>biological sciences</li>
                            <li>chemical sciences</li>
                            <li>earth sciences</li>
                            <li>mathematical sciences</li>
                            <li>natural and physical sciences</li>
                            <li>other natural and physical sciences</li>
                            <li>physics and astronomy</li>
                        </ul>
                        <h3>Information technology</h3>
                        <ul>
                            <li>computer science</li>
                            <li>information systems</li>
                            <li>information technology</li>
                            <li>other information technology</li>
                        </ul>
                        <h3>Engineering and related technologies</h3>
                        <ul>
                            <li>aerospace engineering and technology</li>
                            <li>civil engineering</li>
                            <li>electrical and electronic engineering and technology</li>
                            <li>engineering and related technologies</li>
                            <li>geomatics engineering</li>
                            <li>manufacturing engineering and technology</li>
                            <li>maritime engineering and technology</li>
                            <li>mechanical and industrial engineering and technology</li>
                            <li>other engineering and related technologies</li>
                            <li>process and resources engineering.</li>
                        </ul>
                        <p>
                            To determine whether your qualification is eligible, see the{" "}
                            <a href="http://cricos.education.gov.au/">CRICOS</a> website.
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a136",
                text: "Yes	",
                points: 10,
                nextQuestion: "q53",
            },
            {
                id: "a137",
                text: "No",
                points: 0,
                nextQuestion: "q53",
            },
        ],
    },
    {
        id: "q53",
        text: "Have you been accredited at the paraprofessional level or above, certified at the certified provisional level or above, or have a community language credential for interpreting or translating by the National Accreditation Authority for Translators and Interpreters.*?   ",
        bigHeading: "",
        heading: "Accredition in a community language:",
        smallHeading: "Credentialled community language",
        htmlData: (
            <p>
                <a href="http://www.naati.com.au/">
                    *National Accreditation Authority for Translators and Interpreters
                </a>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a138",
                text: "Yes	",
                points: 5,
                nextQuestion: "q54",
            },
            {
                id: "a139",
                text: "No",
                points: 0,
                nextQuestion: "q54",
            },
        ],
    },
    {
        id: "q54",
        text: "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that satisfies the Australian study requirement obtained while living and studying in an eligible area of regional Australia?   ",
        bigHeading: "",
        heading: "Study in regional Australia",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Study in regional Australia </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle4"}
                        onClick={toggleMe4}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data4">
                    <p>
                        To be eligible for the award of points your educational
                        qualification:
                        <ul>
                            <li>
                                must meet the{" "}
                                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/australian-study-requirement">
                                    Australian study requirement
                                </a>
                            </li>
                            <li>
                                have been obtained while you lived in, and studied at a campus
                                in a designated regional area
                            </li>
                            <li>not include study undertaken by distance education</li>
                        </ul>
                        <p>
                            To determine whether your qualification is eligible, see the{" "}
                            <a href="http://cricos.education.gov.au/">CRICOS</a> website.
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a140",
                text: "Yes	",
                points: 5,
                nextQuestion: "q55",
            },
            {
                id: "a141",
                text: "No",
                points: 0,
                nextQuestion: "q55",
            },
        ],
    },
    {
        id: "q55",
        text: "Select the relevant partner skills qualifications:   ",
        bigHeading: "",
        heading: "Partner skills",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Partner skills </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle5"}
                        onClick={toggleMe5}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data5">
                    <p>
                        Your spouse or de facto partner must also be an applicant for this
                        visa and meet age, English and skill criteria For you to be eligible
                        for the award of these points your partner must be an applicant for
                        the same visa subclass and must not be an Australian permanent
                        resident or an Australian citizen. Additionally, you will need to
                        provide evidence that when you were invited to apply for this visa
                        that they:
                        <ul>
                            <li>were under 45 years old</li>
                            <li>
                                had{" "}
                                <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/competent-english">
                                    competent English
                                </a>
                            </li>
                            <li>
                                had nominated a skilled occupation that is on the same skilled
                                occupation list as your nominated skilled occupation
                            </li>
                            <li>
                                had a suitable skills assessment from the relevant assessing
                                authority for their nominated skilled occupation, and the
                                assessment wasn’t for a Subclass 485 visa.
                            </li>
                        </ul>
                        <p>
                            Your spouse or de facto partner must also be an applicant for this
                            visa and has{" "}
                            <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/competent-english">
                                competent English
                            </a>
                            For you to be eligible for the award of these points your partner
                            must be an applicant for the same visa subclass and must not be an
                            Australian permanent resident or an Australian citizen.
                        </p>
                        <p>
                            You are single or your partner is an Australian citizen or
                            permanent resident
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a142",
                text: "Your spouse or de facto partner must also be an applicant for this visa and meet age, English and skill criteria	",
                points: 10,
                nextQuestion: "q56",
            },
            {
                id: "a143",
                text: "Your spouse or de facto partner must also be an applicant for this visa and has competent English",
                points: 5,
                nextQuestion: "q56",
            },
            {
                id: "a144",
                text: "You are single or your partner is an Australian citizen or permanent resident",
                points: 10,
                nextQuestion: "q56",
            },
        ],
    },
    {
        id: "q56",
        text: "Did you complete a professional year in Australia?   ",
        bigHeading: "",
        heading: "Professional year in Australia",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Professional year in Australia </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle6"}
                        onClick={toggleMe6}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data6">
                    <p>
                        At the time of invitation to apply, you had completed a Professional
                        Year. To be eligible for the award of these points your Professional
                        Year must have been in Accounting, ICT/Computing or Engineering,
                        and:
                        <ul>
                            <li>
                                in your nominated occupation or a closely related occupation
                            </li>
                            <li>completed over a period of at least 12 months</li>
                            <li>
                                completed in Australia in the four years before you are invited
                                to apply for a visa*
                            </li>
                            <li>provided by one of these organisations</li>
                            <li>
                                the{" "}
                                <a href="http://www.acs.org.au/">Australian Computer Society</a>
                            </li>
                            <li>
                                <a href="http://www.cpaaustralia.com.au/">CPA Australia</a>
                            </li>
                            <li>
                                <a href="https://www.charteredaccountantsanz.com/">
                                    Chartered Accountants Australia and New Zealand
                                </a>
                            </li>
                            <li>
                                <a href="http://www.publicaccountants.org.au/">
                                    the Institute of Public Accountants (formerly the National
                                    Institute of Accountants)
                                </a>
                            </li>
                            <li>
                                <a href="http://www.eeaust.com.au/">Engineers Australia.</a>
                            </li>
                        </ul>
                        <p>
                            * Where a Professional Year program was completed, meaning
                            finished, within the 48 month period prior to the time of
                            invitation, you may be awarded 5 points. To avoid any doubt, you
                            could have commenced the Professional Year at a time before the 48
                            months prior to invitation. The time you “completed” a
                            Professional Year is the date listed on your official Record of
                            Completion which is issued by the authorised body or Professional
                            Year program delivery partner.
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "radio",
        answers: [
            {
                id: "a145",
                text: "Yes	",
                points: 5,
                nextQuestion: "q57",
            },
            {
                id: "a146",
                text: "No",
                points: 0,
                nextQuestion: "q57",
            },
        ],
    },
    {
        id: "q57",
        text: "Have you been nominated or sponsored to apply for this visa?  ",
        bigHeading: "",
        heading: "Nomination or sponsorship",
        smallHeading: "",
        htmlData: (
            <p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2>Nomination or sponsorship </h2>
                    <button
                        style={{
                            background: "#004d8e",
                            color: "#fff",
                            maxWidth: "100%",
                            display: "block",
                            margin: "5px 0",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            textDecoration: "none!important",
                            borderRadius: ".2rem",
                            padding: "14px 18px",
                            borderWidth: "0",
                            lineHeight: "1.5rem",
                            whiteSpace: "normal",
                        }}
                        id={"btnToggle7"}
                        onClick={toggleMe7}
                    >
                        Check if you can claim this
                    </button>
                </div>
                <div className="data7">
                    <p>
                        <p>
                            You must have been nominated or stated you would be sponsored by
                            an eligible family member to be invited to apply for this visa.
                        </p>
                        <p>
                            For nominated applicants provided your nomination remains in
                            effect, you may be eligible for the award of these points.
                        </p>
                        <p>
                            For sponsored applicants provided your sponsorship has been
                            approved, you may be eligible for the award of these points.
                        </p>
                        <p>
                            Information on sponsorship and nomination is available for the{" "}
                            <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-regional-provisional-489/invited-pathway">
                                Skilled Regional (Provisional) visa (subclass 489) invited
                                pathway.
                            </a>{" "}
                        </p>
                    </p>
                </div>
            </p>
        ),
        type: "select",
        answers: [
            {
                id: "a147",
                text: "You were invited to apply for a Skilled Work Regional (Provisional) visa (subclass 491) because you were nominated and the nominating State or Territory government agency has not withdrawn that nomination",
                points: 15,
                nextQuestion: null,
            },
            {
                id: "a148",
                text: "You are being sponsored for a Skilled Work Regional (Provisional) visa (subclass 491) visa by a family member and the Minister has accepted that sponsorship",
                points: 15,
                nextQuestion: null,
            },
            {
                id: "a149",
                text: "Not applicable",
                points: 0,
                nextQuestion: null,
            },
        ],
    },
];
function PointsCalculator() {
    const [answers, setAnswers] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [points, setPoints] = useState(0); // add this line
    const [finalPoints, setFinalPoints] = useState(null); // add this line
    const [myQuestions, setMyQuestions] = useState([]);
    const [formToggle, setformToggle] = useState(false);
    const handleAnswerSelect = (event, ques) => {
        const answerId = event.target.value;
        const questionId = currentQuestion.id;

        if (questionId) {
            // If answer already exists, update it
            setAnswers({
                ...answers,
                [ques.id]: answerId,
            });
            console.log(answers);
            const nextQuestion = ques.answers.find(
                (answer) => answer.id === answerId
            )?.nextQuestion;
            if (nextQuestion) {
                const newQuestion = questions.find(
                    (question) => question.id === nextQuestion
                );
                // console.log(newQuestion);
                if (newQuestion) {
                    setCurrentQuestion(newQuestion);
                }
            }
        } else {
            // Otherwise, add new answer
            setAnswers({
                ...answers,
                [ques.id]: answerId,
            });
            const nextQuestion = currentQuestion.answers.find(
                (answer) => answer.id === answerId
            )?.nextQuestion;
            if (nextQuestion) {
                const newQuestion = questions.find(
                    (question) => question.id === nextQuestion
                );
                if (newQuestion) {
                    setCurrentQuestion(newQuestion);
                }
            }
        }
    };
    useEffect(() => {
        const toggleMe = () => {
            const btn = document.querySelector("#btnToggle");
            const box = document.querySelector(".data");
            console.log(btn);
            if (btn && box) {
                btn.addEventListener("click", () => {
                    box.classList.toggle("show");
                });
            }
        };
    }, []);

    const handleAnswerRadio = (event, ques) => {
        const answerId = event.target.value;
        const questionId = currentQuestion.id;
        const existingAnswer = answers[questionId];
        const numberOfItems = Object.keys(answers).length;
        console.log(numberOfItems);
        if (ques.id === "q1" && numberOfItems >= 2) {
            const nextQuestion = ques.answers.find(
                (answer) => answer.id === answerId
            )?.nextQuestion;
            if (nextQuestion) {
                const newQuestion = questions.find(
                    (question) => question.id === nextQuestion
                );
                // console.log(newQuestion);
                if (newQuestion) {
                    setCurrentQuestion(newQuestion);
                }
            }
            setAnswers({ [ques.id]: answerId });
            console.log(answers, nextQuestion);
            return;
        }
        if (answers[ques.id]) {
            // If answer already exists, update it
            setAnswers({
                ...answers,
                [ques.id]: answerId,
            });
            console.log(answers);
            const nextQuestion = ques.answers.find(
                (answer) => answer.id === answerId
            )?.nextQuestion;
            if (nextQuestion) {
                const newQuestion = questions.find(
                    (question) => question.id === nextQuestion
                );
                // console.log(newQuestion);
                if (newQuestion) {
                    setCurrentQuestion(newQuestion);
                }
            }
        } else {
            // Otherwise, add new answer
            setAnswers({
                ...answers,
                [questionId]: answerId,
            });

            // Find next question if it exists
            const nextQuestion = currentQuestion.answers.find(
                (answer) => answer.id === answerId
            )?.nextQuestion;
            if (nextQuestion) {
                const newQuestion = questions.find(
                    (question) => question.id === nextQuestion
                );
                if (newQuestion) {
                    setCurrentQuestion(newQuestion);
                }
            }
        }
    };

    const getTotalPoints = () => {
        let totalPoints = 0;
        Object.entries(answers).forEach(([questionId, answerId]) => {
            const question = questions.find((question) => question.id === questionId);
            const answer = question.answers.find((answer) => answer.id === answerId);
            if (answer && answer.points) {
                totalPoints += answer.points;
            }
        });
        return totalPoints;
    };
    // console.log(getTotalPoints());
    const getQuestionsList = () => {
        let answeredAllQuestions = true;
        const DivArray = [1, 2, 4, 5, 6, 7, 8, 9];
        let questionsList = questions.map((question) => {
            const answerId = answers[question.id];
            if (question === currentQuestion || answerId) {
                return (
                    <div key={question.id} style={{ marginBottom: "30px" }} id={""}>
                        <h1 style={{ fontSize: "2rem" }}>{question?.bigHeading}</h1>
                        <h2>{question.smallHeading}</h2>
                        {question.htmlData}
                        <h3 style={{ margin: "30px 0" }}>{question.text}</h3>
                        {question.type === "select" ? (
                            <select onChange={(event) => handleAnswerSelect(event, question)}>
                                <option value="">Please select an answer</option>
                                {question.answers.map((answer) => (
                                    <option key={answer.id} value={answer.id}>
                                        {answer.text}
                                    </option>
                                ))}
                            </select>
                        ) : question.type === "radio" ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "8px",
                                    fontSize: "15px",
                                }}
                            >
                                {question.answers.map((answer) => (
                                    <div key={answer.id}>
                                        <input
                                            type="radio"
                                            id={answer.id}
                                            name={question.id}
                                            value={answer.id}
                                            onChange={(event) => handleAnswerRadio(event, question)}
                                        />
                                        <label htmlFor={answer.id}>{answer.text}</label>
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </div>
                );
            } else {
                answeredAllQuestions = false;
            }
        });

        if (
            answers.q10 ||
            answers.q21 ||
            answers.q33 ||
            answers.q45 ||
            answers.q57
        ) {
            const totalPoints = getTotalPoints();
            const contact = <ContactForm totalPoints={totalPoints} formToggle={formToggle} setformToggle={setformToggle} />;


            questionsList.push(contact);
        }
        if (formToggle) {
            const totalPoints = getTotalPoints();
            const resultTable = (
                <div>
                    <h1 style={{ textAlign: "center" }}>Your Total Points Summary</h1>
                    <table
                        style={{
                            margin: "auto",
                            maxWidth: "900px",
                            width: "100%",
                        }}
                    >
                        <tbody>
                            {questions.map((question, index) => {
                                const answerId = answers[question.id];
                                const selectedAnswer = question.answers.find(
                                    (answer) => answer.id === answerId
                                );
                                const points = selectedAnswer ? selectedAnswer.points : null;
                                if (points !== null) {
                                    return (
                                        <tr key={index} className={"points__row"}>
                                            <td>
                                                <h3>{question.heading}</h3>
                                            </td>
                                            <td
                                                style={{
                                                    border: "1px solid #a1a1a1",
                                                    lineHeight: "3rem",
                                                    height: "3rem",
                                                    padding: "0 10px",
                                                }}
                                            >
                                                {points}
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}

                            <tr
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    alignItems: "center",
                                    gap: "2rem",
                                }}
                            >
                                <td>
                                    <h3>Your points total</h3>
                                </td>
                                <td className="tddd">{totalPoints}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a
                            style={{
                                background: "rgb(0, 77, 142)",
                                color: "rgb(255, 255, 255)",
                                padding: "1rem 1.8rem",
                                lineHeight: "1.5rem",
                                whiteSpace: "normal",
                                fontSize: "1.2rem",
                                fontStyle: "normal",
                                borderRadius: "0.2rem",
                                borderWidth: "0px",
                                marginTop: "25px",
                            }}
                            href="/"
                            onClick={() => { window.scroll(0, 0) }}
                        >
                            Reset Calculator
                        </a>
                    </div>
                </div>
            );
            window.scroll(0, 0)
            questionsList = []
            questionsList.push(resultTable);
        }
        // Check if final points have been calculated, and return result table if so

        return questionsList;
    };

    // Render the questions otherwise
    return (
        <div style={{ maxWidth: "1100px", margin: "auto", padding: "10px" }}>
            <h1>{formToggle ? null : 'Points Calculator'}</h1>
            {getQuestionsList()}
        </div>
    );
}

export default PointsCalculator;
